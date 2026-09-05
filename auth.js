import crypto from 'node:crypto';
import { getDb } from './db.js';

const COOKIE_NAME = 'fe_session';
const SESSION_DAYS = 7;

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
}

function verifyPassword(password, salt, expectedHash) {
  const actual = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(
    Buffer.from(actual, 'hex'),
    Buffer.from(expectedHash, 'hex')
  );
}

function secret() {
  if (!process.env.SESSION_SECRET) {
    throw new Error('SESSION_SECRET 환경변수가 없습니다.');
  }
  return process.env.SESSION_SECRET;
}

function sign(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', secret()).update(body).digest('base64url');
  return `${body}.${sig}`;
}

function verify(token) {
  try {
    const [body, sig] = token.split('.');
    if (!body || !sig) return null;
    const expected = crypto.createHmac('sha256', secret()).update(body).digest('base64url');
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString());
    if (!payload.exp || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

function getCookie(req) {
  const raw = req.headers.cookie || '';
  const found = raw.split(';').map(x => x.trim()).find(x => x.startsWith(`${COOKIE_NAME}=`));
  return found ? decodeURIComponent(found.slice(COOKIE_NAME.length + 1)) : null;
}

export function getCurrentUser(req) {
  const token = getCookie(req);
  return token ? verify(token) : null;
}

function setSession(res, username) {
  const token = sign({
    username,
    exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
  });
  res.setHeader('Set-Cookie',
    `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DAYS * 24 * 60 * 60}`
  );
}

function clearSession(res) {
  res.setHeader('Set-Cookie',
    `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
  );
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  try {
    if (req.method === 'GET') {
      const user = getCurrentUser(req);
      return res.status(200).json({
        authenticated: !!user,
        username: user?.username || null
      });
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: '허용되지 않은 요청입니다.' });
    }

    const { action, username, password } = req.body || {};
    const db = getDb();

    if (action === 'signup') {
      if (!username || !password) {
        return res.status(400).json({ error: '아이디와 비밀번호를 입력해주세요.' });
      }
      if (!/^[a-zA-Z0-9가-힣_-]{2,30}$/.test(username)) {
        return res.status(400).json({ error: '아이디는 2~30자의 한글/영문/숫자/기호만 사용할 수 있습니다.' });
      }
      if (String(password).length < 4 || String(password).length > 100) {
        return res.status(400).json({ error: '비밀번호는 4~100자로 입력해주세요.' });
      }

      const exists = await db`SELECT username FROM users WHERE username = ${username}`;
      if (exists.length) {
        return res.status(409).json({ error: '이미 사용 중인 아이디입니다.' });
      }

      const { salt, hash } = hashPassword(password);
      await db`
        INSERT INTO users (username, password_hash, password_salt)
        VALUES (${username}, ${hash}, ${salt})
      `;
      setSession(res, username);
      return res.status(201).json({ username });
    }

    if (action === 'login') {
      if (!username || !password) {
        return res.status(400).json({ error: '아이디와 비밀번호를 입력해주세요.' });
      }

      const rows = await db`
        SELECT username, password_hash, password_salt
        FROM users WHERE username = ${username}
      `;
      if (!rows.length || !verifyPassword(password, rows[0].password_salt, rows[0].password_hash)) {
        return res.status(401).json({ error: '아이디 또는 비밀번호가 올바르지 않습니다.' });
      }

      setSession(res, username);
      return res.status(200).json({ username });
    }

    if (action === 'logout') {
      clearSession(res);
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: '알 수 없는 인증 요청입니다.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
}
