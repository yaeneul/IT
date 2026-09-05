import { getDb, ALLOWED_KEYS } from './db.js';
import { getCurrentUser } from './auth.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  try {
    const db = getDb();

    if (req.method === 'GET') {
      const key = String(req.query?.key || '');
      if (!ALLOWED_KEYS.has(key)) {
        return res.status(400).json({ error: '허용되지 않은 데이터 키입니다.' });
      }

      const rows = await db`SELECT value FROM site_data WHERE key = ${key}`;
      return res.status(200).json({
        exists: rows.length > 0,
        value: rows.length ? rows[0].value : null
      });
    }

    if (req.method === 'POST') {
      const user = getCurrentUser(req);
      if (!user) {
        return res.status(401).json({ error: '로그인이 필요합니다.' });
      }

      const { key, value } = req.body || {};
      if (!ALLOWED_KEYS.has(key)) {
        return res.status(400).json({ error: '허용되지 않은 데이터 키입니다.' });
      }

      await db`
        INSERT INTO site_data (key, value, updated_by)
        VALUES (${key}, ${JSON.stringify(value)}::jsonb, ${user.username})
        ON CONFLICT (key)
        DO UPDATE SET value = EXCLUDED.value, updated_by = EXCLUDED.updated_by, updated_at = NOW()
      `;

      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: '허용되지 않은 요청입니다.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
}
