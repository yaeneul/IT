/* ===================== 데이터 ===================== */

const MEMBERS = [
  {id:'m1', name:'추대민', grade:'2학년', isLeader:false, color:'#e7a13a', joined:'2026.03', tags:['로봇공학','팀리더'],
    bio:'로봇 동아리에서 자율주행 로봇을 설계하며, 학급 프로젝트마다 아이디어를 스케치하는 것을 즐깁니다.'},
  {id:'m2', name:'이승찬', grade:'2학년', isLeader:false, color:'#5ea8d9', joined:'2026.03', tags:['소프트웨어','기획'],
    bio:'코딩 동아리에서 웹 서비스를 만드는 프로젝트를 진행하며, 학급 홈페이지 기획에도 참여하고 있습니다.'},
  {id:'m3', name:'정도윤', grade:'2학년', isLeader:false, color:'#7fbf7f', joined:'2026.03', tags:['전자공학','회로설계'],
    bio:'각종 전자 부품을 다루는 것을 좋아하며, 학급 전시회에 쓰일 회로 기판을 직접 설계했습니다.'},
  {id:'m4', name:'이예늘', grade:'2학년', isLeader:true, color:'#d97757', joined:'2026.03', tags:['리더십','3D프린팅'],
    bio:'미래공학반 반장으로 학급 행사와 회의를 이끌고 있으며, 3D 프린터로 학급 로고 조형물을 제작했습니다.'},
  {id:'m5', name:'임준우', grade:'3학년', isLeader:false, color:'#9b8ad9', joined:'2026.03', tags:['드론','항공공학'],
    bio:'드론 동아리를 이끌며 자체 제작한 드론으로 교내 행사를 촬영하고 있습니다.'},
  {id:'m6', name:'정세진', grade:'3학년', isLeader:false, color:'#4fb3a9', joined:'2026.03', tags:['영상편집','SNS'],
    bio:'학급 활동을 영상으로 기록하고, 홈페이지 게시판에 소개하는 것을 좋아합니다.'},
  {id:'m7', name:'김동현', grade:'3학년', isLeader:false, color:'#c9975a', joined:'2026.03', tags:['공구관리','안전'],
    bio:'실습실 공구와 장비를 정리하고, 안전하게 실습할 수 있도록 신경 쓰고 있습니다.'},
  {id:'m8', name:'김정우', grade:'2학년', isLeader:false, color:'#6f9ce0', joined:'2026.03', tags:['수학','물리'],
    bio:'공학 이론 스터디를 조직하고, 어려운 개념을 친구들에게 쉽게 설명해주는 것을 좋아합니다.'},
  {id:'m9', name:'정다애', grade:'1학년', isLeader:false, color:'#c97fb0', joined:'2026.03', tags:['UI디자인','브랜딩'],
    bio:'학급 로고와 홈페이지 디자인 콘셉트를 기획하고, 전시회 포스터 제작을 담당합니다.'},
  {id:'m10', name:'성민수', grade:'2학년', isLeader:false, color:'#8fae5c', joined:'2026.03', tags:['데이터분석','알고리즘'],
    bio:'센서 데이터를 분석하고 시각화하는 작업을 즐기며, 프로젝트 결과를 그래프로 정리합니다.'}
];

/* ===================== SVG 아이콘(플레이스홀더) ===================== */

function gearAvatar(color, initial, size=200){
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#0c2340"/>
    <g opacity="0.18">
      ${Array.from({length:5}).map((_,i)=>`<line x1="${i*40}" y1="0" x2="${i*40}" y2="200" stroke="#5ea8d9" stroke-width="1"/>`).join('')}
      ${Array.from({length:5}).map((_,i)=>`<line x1="0" y1="${i*40}" x2="200" y2="${i*40}" stroke="#5ea8d9" stroke-width="1"/>`).join('')}
    </g>
    <circle cx="100" cy="100" r="52" fill="none" stroke="${color}" stroke-width="4"/>
    <circle cx="100" cy="100" r="52" fill="${color}" opacity="0.12"/>
    ${Array.from({length:8}).map((_,i)=>{
      const a = (i*45)*Math.PI/180;
      const x1 = 100+Math.cos(a)*52, y1=100+Math.sin(a)*52;
      const x2 = 100+Math.cos(a)*64, y2=100+Math.sin(a)*64;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="6" stroke-linecap="round"/>`;
    }).join('')}
    <text x="100" y="115" font-family="Black Han Sans, sans-serif" font-size="42" fill="${color}" text-anchor="middle">${initial}</text>
  </svg>`;
}

function heroIllustration(){
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#123356"/>
    <g opacity="0.35" stroke="#5ea8d9">
      ${Array.from({length:15}).map((_,i)=>`<line x1="${i*40}" y1="0" x2="${i*40}" y2="420"/>`).join('')}
      ${Array.from({length:11}).map((_,i)=>`<line x1="0" y1="${i*40}" x2="600" y2="${i*40}"/>`).join('')}
    </g>
    <circle cx="300" cy="190" r="120" fill="none" stroke="#e7a13a" stroke-width="3" stroke-dasharray="6 6"/>
    <circle cx="300" cy="190" r="90" fill="#0c2340" stroke="#e7a13a" stroke-width="4"/>
    ${Array.from({length:12}).map((_,i)=>{
      const a=(i*30)*Math.PI/180;
      const x1=300+Math.cos(a)*90, y1=190+Math.sin(a)*90;
      const x2=300+Math.cos(a)*112, y2=190+Math.sin(a)*112;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#e7a13a" stroke-width="8" stroke-linecap="round"/>`;
    }).join('')}
    <text x="300" y="205" font-family="Black Han Sans, sans-serif" font-size="46" fill="#e7a13a" text-anchor="middle">FE</text>
    <text x="300" y="345" font-family="JetBrains Mono, monospace" font-size="13" fill="#9fc4e6" text-anchor="middle" letter-spacing="2">CLASS REPRESENTATIVE PHOTO — PLACEHOLDER</text>
    <text x="300" y="365" font-family="JetBrains Mono, monospace" font-size="11" fill="#5b7d9c" text-anchor="middle" letter-spacing="1">실제 학급 단체 사진으로 교체해주세요</text>
  </svg>`;
}

function introIllustration(){
  return `<svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="560" height="400" fill="#0c2340"/>
    <g opacity="0.3" stroke="#5ea8d9">
      ${Array.from({length:14}).map((_,i)=>`<line x1="${i*40}" y1="0" x2="${i*40}" y2="400"/>`).join('')}
      ${Array.from({length:10}).map((_,i)=>`<line x1="0" y1="${i*40}" x2="560" y2="${i*40}"/>`).join('')}
    </g>
    <rect x="90" y="80" width="380" height="240" rx="6" fill="none" stroke="#e7a13a" stroke-width="3"/>
    <circle cx="180" cy="160" r="34" fill="none" stroke="#5ea8d9" stroke-width="4"/>
    <line x1="180" y1="126" x2="180" y2="194" stroke="#5ea8d9" stroke-width="2"/>
    <line x1="146" y1="160" x2="214" y2="160" stroke="#5ea8d9" stroke-width="2"/>
    <rect x="260" y="130" width="150" height="60" fill="none" stroke="#e7a13a" stroke-width="3"/>
    <line x1="260" y1="160" x2="410" y2="160" stroke="#e7a13a" stroke-width="1.5" stroke-dasharray="4 4"/>
    <path d="M150 240 h260" stroke="#5ea8d9" stroke-width="2"/>
    <path d="M150 240 v30 M410 240 v30" stroke="#5ea8d9" stroke-width="2"/>
    <text x="280" y="290" font-family="JetBrains Mono, monospace" font-size="12" fill="#9fc4e6" text-anchor="middle" letter-spacing="1">CLASS FEATURE DIAGRAM — PLACEHOLDER</text>
  </svg>`;
}

/* ===================== 유틸 ===================== */

function esc(str){
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

function escAttr(str){
  return esc(str).replace(/"/g, '&quot;');
}

function fmtDate(ts){
  const d = new Date(ts);
  return d.getFullYear()+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+String(d.getDate()).padStart(2,'0')+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}

async function loadShared(key, fallback){
  try{
    const res = await fetch(`/api/data?key=${encodeURIComponent(key)}`, {
      credentials: 'include'
    });

    if(!res.ok) return fallback;

    const data = await res.json();
    return data.exists ? data.value : fallback;

  }catch(e){
    console.error('API load error', e);
    return fallback;
  }
}

async function saveShared(key, value){
  try{
    const res = await fetch('/api/data', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify({key, value})
    });

    return res.ok;

  }catch(e){
    console.error('API save error', e);
    return false;
  }
}

/* ---- 파일/사진 업로드 헬퍼 ---- */

const MAX_HERO_INTRO_BYTES = 2 * 1024 * 1024;
const MAX_MEMBER_PHOTO_BYTES = 300 * 1024;
const MAX_NOTICE_FILE_BYTES = 800 * 1024;

function fileToDataUrl(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();

    reader.onload = ()=>{
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatBytes(bytes){
  if(bytes < 1024) return bytes+' B';
  if(bytes < 1024*1024) return (bytes/1024).toFixed(1)+' KB';
  return (bytes/1024/1024).toFixed(1)+' MB';
}

async function getPhoto(key){
  const value = await loadShared(key, null);
  return value;
}

async function setPhoto(key, dataUrl){
  return await saveShared(key, dataUrl);
}

async function loadMemberPhotos(){
  return await loadShared('member-photos', {});
}

async function saveMemberPhoto(id, dataUrl){
  const photos = await loadMemberPhotos();
  photos[id] = dataUrl;
  return await saveShared('member-photos', photos);
}

/* ===================== 인증 ===================== */

let currentUser = null;

function authModalHtml(mode){
  const isLogin = mode === 'login';

  return `
    <div class="modal-overlay" id="authOverlay">
      <div class="modal-box">

        <button type="button" class="modal-close" id="authCloseBtn">✕</button>

        <h3 class="display">${isLogin ? '로그인' : '회원가입'}</h3>

        <div class="sub">
          ${isLogin
            ? '관리자로 로그인하면 소개 글을 수정할 수 있어요.'
            : '아이디와 비밀번호를 만들어 관리자로 가입하세요.'}
        </div>

        <div class="field">
          <label>아이디</label>
          <input type="text" id="authUsername" autocomplete="username">
        </div>

        <div class="field">
          <label>비밀번호</label>
          <input
            type="password"
            id="authPassword"
            autocomplete="${isLogin ? 'current-password' : 'new-password'}"
          >
        </div>

        ${!isLogin ? `
          <div class="field">
            <label>비밀번호 확인</label>
            <input type="password" id="authPasswordConfirm">
          </div>
        ` : ''}

        <div class="auth-error" id="authError"></div>

        <button
          type="button"
          class="btn btn-solid"
          id="authSubmitBtn"
          style="width:100%; border:2px solid var(--amber); margin-top:6px;"
        >
          ${isLogin ? '로그인' : '가입하기'}
        </button>

        <div class="modal-switch">
          ${
            isLogin
              ? `계정이 없으신가요? <a id="authSwitchLink">회원가입</a>`
              : `이미 계정이 있으신가요? <a id="authSwitchLink">로그인</a>`
          }
        </div>

      </div>
    </div>
  `;
}

function openAuthModal(mode){
  const root = document.getElementById('authModalRoot');

  root.innerHTML = authModalHtml(mode);

  document.getElementById('authCloseBtn').onclick = closeAuthModal;

  document.getElementById('authOverlay').addEventListener('click', (e)=>{
    if(e.target.id === 'authOverlay'){
      closeAuthModal();
    }
  });

  document.getElementById('authSwitchLink').onclick = ()=>{
    openAuthModal(mode === 'login' ? 'signup' : 'login');
  };

  document.getElementById('authSubmitBtn').onclick = ()=>{
    mode === 'login'
      ? handleLogin()
      : handleSignup();
  };
}

function closeAuthModal(){
  const root = document.getElementById('authModalRoot');

  if(root){
    root.innerHTML = '';
  }
}

function showAuthError(msg){
  const el = document.getElementById('authError');

  if(el){
    el.textContent = msg;
    el.style.display = 'block';
  }
}

async function handleSignup(){
  const username = document.getElementById('authUsername').value.trim();
  const pw = document.getElementById('authPassword').value;
  const pw2 = document.getElementById('authPasswordConfirm').value;

  if(!username || !pw){
    showAuthError('아이디와 비밀번호를 입력해주세요.');
    return;
  }

  if(pw !== pw2){
    showAuthError('비밀번호가 일치하지 않습니다.');
    return;
  }

  try{
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        action:'signup',
        username,
        password:pw
      })
    });

    const data = await res.json();

    if(!res.ok){
      showAuthError(data.error || '가입에 실패했습니다.');
      return;
    }

    currentUser = data.username;

  }catch(e){
    showAuthError('서버에 연결할 수 없습니다.');
    return;
  }

  closeAuthModal();
  renderAuthWidget();
  render();
}
async function handleLogin(){
  const username = document.getElementById('authUsername').value.trim();
  const pw = document.getElementById('authPassword').value;

  if(!username || !pw){
    showAuthError('아이디와 비밀번호를 입력해주세요.');
    return;
  }

  try{
    const res = await fetch('/api/auth', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({
        action:'login',
        username,
        password:pw
      })
    });

    const data = await res.json();

    if(!res.ok){
      showAuthError(data.error || '로그인에 실패했습니다.');
      return;
    }

    currentUser = data.username;

  }catch(e){
    console.error(e);
    showAuthError('서버에 연결할 수 없습니다.');
    return;
  }

  closeAuthModal();
  renderAuthWidget();
  render();
}

async function logout(){
  try{
    await fetch('/api/auth', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({action:'logout'})
    });
  }catch(e){
    console.error(e);
  }

  currentUser = null;
  renderAuthWidget();
  render();
}

async function initAuth(){
  try{
    const res = await fetch('/api/auth', {
      credentials:'include'
    });

    if(!res.ok){
      currentUser = null;
      renderAuthWidget();
      return;
    }

    const data = await res.json();

    currentUser = data.authenticated
      ? data.username
      : null;

  }catch(e){
    console.error('Auth check error',e);
    currentUser = null;
  }

  renderAuthWidget();
}

function renderAuthWidget(){
  const el = document.getElementById('authWidget');

  if(!el) return;

  if(currentUser){
    el.innerHTML = `
      <span class="auth-user">
        ${esc(currentUser)}
      </span>
      <button type="button" onclick="logout()">
        로그아웃
      </button>
    `;
  }else{
    el.innerHTML = `
      <button type="button" onclick="openAuthModal('login')">
        로그인
      </button>
      <button type="button" onclick="openAuthModal('signup')">
        회원가입
      </button>
    `;
  }
}

/* ===================== 기본 데이터 ===================== */

const DEFAULT_INTRO = {
  title:'미래공학반',
  text:
`미래공학반은 공학 기술과 창의적인 문제 해결을 배우는 학급입니다.

소프트웨어, 로봇, 전자공학, 3D 프린팅 등 다양한 분야를 직접 경험하며 프로젝트를 진행합니다.

서로의 아이디어를 공유하고 함께 만들어가는 과정을 중요하게 생각합니다.`,
  specs:[
    ['CLASS','미래공학반'],
    ['YEAR','2026'],
    ['MEMBERS',`${MEMBERS.length}명`],
    ['FIELD','미래공학 · 공학']
  ]
};

const DEFAULT_NOTICES = [
  {
    id:1,
    title:'미래공학반 홈페이지가 개설되었습니다.',
    body:'미래공학반 홈페이지에 오신 것을 환영합니다!',
    author:'관리자',
    date:'2026.03.01',
    attachment:null
  },
  {
    id:2,
    title:'학급 프로젝트를 시작합니다.',
    body:'올해 진행할 다양한 프로젝트를 함께 준비해주세요.',
    author:'관리자',
    date:'2026.03.02',
    attachment:null
  }
];

const DEFAULT_POSTS = [];

const DEFAULT_MEMBER_CONTENT = {};

/* ===================== 라우팅 ===================== */

function getRoute(){
  const hash = location.hash || '#/home';

  const parts = hash
    .replace(/^#\//,'')
    .split('/');

  return {
    page:parts[0] || 'home',
    id:parts[1] || null
  };
}

function goTo(event, hash){
  if(event){
    event.preventDefault();
  }

  location.hash = hash;
  return false;
}

function setActiveNav(page){
  document.querySelectorAll('#navTabs a').forEach(a=>{
    a.classList.toggle(
      'active',
      a.dataset.route === page
    );
  });
}

/* ===================== 홈 ===================== */

async function renderHome(){
  const heroPhoto = await getPhoto('photo-hero');

  return `
    <section class="hero">

      <div>
        <div class="hero-eyebrow mono">
          FUTURE ENGINEERING CLASS / 2026
        </div>

        <h1 class="display">
          함께 만들고<br>
          함께 성장하는<br>
          미래공학반
        </h1>

        <p>
          기술과 아이디어를 직접 연결하며
          새로운 것을 만들어가는 우리 반의 공간입니다.
        </p>

        <div class="hero-cta">
          <a
            href="#/intro"
            class="btn btn-solid"
            onclick="return goTo(event,'#/intro')"
          >
            학급 소개
          </a>

          <a
            href="#/members"
            class="btn btn-outline"
            onclick="return goTo(event,'#/members')"
          >
            구성원 보기
          </a>
        </div>
      </div>

      <div class="hero-photo frame">

        ${currentUser ? `
          <label class="photo-upload-btn">
            📷 사진 변경
            <input
              type="file"
              accept="image/*"
              hidden
              onchange="handleHeroPhoto(this)"
            >
          </label>
        ` : ''}

        ${
          heroPhoto
            ? `<img src="${heroPhoto}" alt="미래공학반 사진">`
            : heroIllustration()
        }

        <div class="photo-tag">
          FIG.01 / CLASS
        </div>

      </div>

    </section>

    <section>
      <div class="section-head">
        <div class="section-eyebrow">RECENT</div>
        <h2 class="display">공지사항</h2>
        <p>
          미래공학반의 새로운 소식을 확인하세요.
        </p>
      </div>

      ${await renderNoticeList(3)}
    </section>
  `;
}

/* ===================== 학급 소개 ===================== */

async function renderIntro(){
  const intro = await loadShared(
    'intro-content',
    DEFAULT_INTRO
  );

  const introPhoto = await getPhoto('photo-intro');

  return `
    <div class="section-head">
      <div class="section-eyebrow">ABOUT CLASS</div>
      <h2 class="display">
        ${esc(intro.title || '미래공학반')}
      </h2>
      <p>
        우리가 무엇을 배우고, 어떻게 활동하는지 소개합니다.
      </p>
    </div>

    ${
      currentUser
      ? `
      <div class="panel">
        <h4>EDIT / INTRODUCTION</h4>

        <div class="field">
          <label>제목</label>
          <input
            type="text"
            id="introTitle"
            value="${escAttr(intro.title || '')}"
          >
        </div>

        <div class="field">
          <label>소개 내용</label>
          <textarea id="introText">${esc(intro.text || '')}</textarea>
        </div>

        <button
          class="btn btn-solid btn-sm"
          onclick="saveIntro()"
        >
          저장
        </button>
      </div>
      `
      : ''
    }

    <div class="intro-grid">

      <div class="frame frame-light">

        ${
          currentUser
          ? `
          <label class="photo-upload-btn">
            📷 사진 변경
            <input
              type="file"
              accept="image/*"
              hidden
              onchange="handleIntroPhoto(this)"
            >
          </label>
          `
          : ''
        }

        ${
          introPhoto
            ? `<img src="${introPhoto}" alt="학급 소개 사진">`
            : introIllustration()
        }

      </div>

      <div class="intro-text">

        <p>
          ${esc(intro.text || '').replace(/\n/g,'<br>')}
        </p>

        <ul class="spec-list">

          ${
            (intro.specs || DEFAULT_INTRO.specs)
              .map(s=>`
                <li>
                  <b>${esc(s[0])}</b>
                  <span>${esc(s[1])}</span>
                </li>
              `)
              .join('')
          }

        </ul>

      </div>

    </div>
  `;
}

/* ===================== 공지사항 ===================== */

async function renderNoticeList(limit=null){
  const notices = await loadShared(
    'notices-data',
    DEFAULT_NOTICES
  );

  const list = Array.isArray(notices)
    ? notices
    : [];

  const items = limit
    ? list.slice(0,limit)
    : list;

  if(!items.length){
    return `
      <div class="empty-state">
        <div class="display">공지사항이 없습니다.</div>
        <div>새로운 소식이 등록되면 여기에 표시됩니다.</div>
      </div>
    `;
  }

  return items.map(n=>`
    <article class="notice-item">

      <div class="meta">
        ${esc(n.date || '')}
        ·
        ${esc(n.author || '관리자')}
      </div>

      <h3>${esc(n.title || '')}</h3>

      <p>${esc(n.body || '')}</p>

      ${
        n.attachment
        ? `
          <a
            class="attachment-link"
            href="${n.attachment.data}"
            download="${escAttr(n.attachment.name)}"
          >
            📎 ${esc(n.attachment.name)}
          </a>
        `
        : ''
      }

      ${
        currentUser
        ? `
          <button
            class="btn btn-sm"
            style="margin-top:12px;"
            onclick="deleteNotice('${escAttr(String(n.id))}')"
          >
            삭제
          </button>
        `
        : ''
      }

    </article>
  `).join('');
}

async function renderNotices(){
  return `
    <div class="section-head">
      <div class="section-eyebrow">NOTICE</div>
      <h2 class="display">공지사항</h2>
      <p>
        학급의 주요 공지와 소식을 확인할 수 있습니다.
      </p>
    </div>

    ${
      currentUser
      ? `
      <div class="panel">

        <h4>NEW / NOTICE</h4>

        <div class="field">
          <label>제목</label>
          <input type="text" id="noticeTitle">
        </div>

        <div class="field">
          <label>내용</label>
          <textarea id="noticeBody"></textarea>
        </div>

        <div class="field">
          <label>첨부파일</label>

          <label class="file-btn">
            📎 파일 선택
            <input
              type="file"
              id="noticeFile"
              hidden
            >
          </label>
        </div>

        <button
          class="btn btn-solid btn-sm"
          onclick="addNotice()"
        >
          공지 등록
        </button>

      </div>
      `
      : ''
    }

    <div id="noticeList">
      ${await renderNoticeList()}
    </div>
  `;
}

/* ===================== 게시판 ===================== */

async function renderBoard(){
  const posts = await loadShared(
    'board-posts',
    DEFAULT_POSTS
  );

  const list = Array.isArray(posts)
    ? posts
    : [];

  return `
    <div class="section-head">
      <div class="section-eyebrow">CLASS BOARD</div>
      <h2 class="display">학급 게시판</h2>
      <p>
        미래공학반의 활동과 이야기를 자유롭게 공유해보세요.
      </p>
    </div>

    ${
      currentUser
      ? `
      <div class="panel">

        <h4>NEW / POST</h4>

        <div class="field">
          <label>작성자</label>
          <input
            type="text"
            id="postAuthor"
            value="${escAttr(currentUser)}"
          >
        </div>

        <div class="field">
          <label>내용</label>
          <textarea id="postBody"></textarea>
        </div>

        <div class="field">
          <label>이미지</label>

          <label class="file-btn">
            🖼 이미지 선택
            <input
              type="file"
              id="postImage"
              accept="image/*"
              hidden
            >
          </label>
        </div>

        <button
          class="btn btn-solid btn-sm"
          onclick="addPost()"
        >
          게시하기
        </button>

      </div>
      `
      : ''
    }

    ${
      list.length
      ? list.map(post=>`
        <article class="board-post">

          <div class="board-post-head">
            <span class="author">
              ${esc(post.author || '익명')}
            </span>

            <span class="date">
              ${esc(post.date || '')}
            </span>
          </div>

          <div class="board-post-body">

            <p>
              ${esc(post.body || '')}
            </p>

            ${
              post.image
              ? `<img src="${post.image}" alt="게시물 이미지">`
              : ''
            }

            ${
              currentUser
              ? `
              <button
                class="btn btn-sm"
                style="margin-top:12px;"
                onclick="deletePost('${escAttr(String(post.id))}')"
              >
                삭제
              </button>
              `
              : ''
            }

          </div>

        </article>
      `).join('')
      : `
        <div class="empty-state">
          <div class="display">게시물이 없습니다.</div>
          <div>첫 번째 게시물을 작성해보세요.</div>
        </div>
      `
    }
  `;
}
/* ===================== 구성원 소개 ===================== */

async function renderMembers(){
  const photos = await loadMemberPhotos();

  return `
    <div class="section-head">
      <div class="section-eyebrow">MEMBERS</div>
      <h2 class="display">구성원 소개</h2>
      <p>
        미래공학반에서 함께 활동하는 구성원들을 소개합니다.
      </p>
    </div>

    <div class="member-grid">

      ${MEMBERS.map(member=>{

        const photo = photos[member.id];

        return `
          <div
            class="member-card"
            onclick="location.hash='#/members/${member.id}'"
          >

            <div class="avatar-wrap">

              ${
                photo
                ? `
                  <img
                    class="avatar-img"
                    src="${photo}"
                    alt="${escAttr(member.name)}"
                  >
                `
                : gearAvatar(
                    member.color,
                    member.name.charAt(0)
                  )
              }

              ${
                currentUser
                ? `
                <label
                  class="avatar-upload-btn"
                  onclick="event.stopPropagation()"
                  title="사진 변경"
                >
                  📷
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onchange="handleMemberPhoto(this,'${member.id}')"
                  >
                </label>
                `
                : ''
              }

            </div>

            <div class="name">
              ${esc(member.name)}
            </div>

            <div class="grade">
              ${esc(member.grade)}
              ${member.isLeader ? ' · 반장' : ''}
            </div>

          </div>
        `;
      }).join('')}

    </div>
  `;
}

/* ===================== 구성원 상세 ===================== */

async function renderMemberDetail(id){

  const member = MEMBERS.find(m=>m.id === id);

  if(!member){
    return `
      <div class="empty-state">
        <div class="display">구성원을 찾을 수 없습니다.</div>
        <a
          class="back-link"
          href="#/members"
          onclick="return goTo(event,'#/members')"
        >
          ← 구성원 목록으로
        </a>
      </div>
    `;
  }

  const photos = await loadMemberPhotos();
  const photo = photos[member.id];

  const custom = await loadShared(
    'member-content',
    DEFAULT_MEMBER_CONTENT
  );

  const content = custom[member.id] || {
    bio:member.bio,
    tags:member.tags
  };

  return `
    <a
      class="back-link"
      href="#/members"
      onclick="return goTo(event,'#/members')"
    >
      ← MEMBERS
    </a>

    <div class="member-detail">

      <div>

        <div class="frame frame-light">

          ${
            photo
            ? `
              <img
                class="avatar-img-detail"
                src="${photo}"
                alt="${escAttr(member.name)}"
              >
            `
            : gearAvatar(
                member.color,
                member.name.charAt(0)
              )
          }

        </div>

        ${
          currentUser
          ? `
          <label class="avatar-upload-btn detail">
            📷 사진 변경
            <input
              type="file"
              accept="image/*"
              hidden
              onchange="handleMemberPhoto(this,'${member.id}',true)"
            >
          </label>
          `
          : ''
        }

      </div>

      <div>

        <div class="section-eyebrow">
          ${esc(member.grade)}
          ${member.isLeader ? ' / CLASS LEADER' : ''}
        </div>

        <h2 class="display" style="font-size:42px; margin:0;">
          ${esc(member.name)}
        </h2>

        <div class="tag-row">
          ${(content.tags || []).map(tag=>`
            <span class="tag">${esc(tag)}</span>
          `).join('')}
        </div>

        <p style="line-height:1.85; color:var(--ink-soft);">
          ${esc(content.bio || '').replace(/\n/g,'<br>')}
        </p>

        ${
          currentUser
          ? `
          <div class="panel" style="margin-top:24px;">

            <h4>EDIT / MEMBER</h4>

            <div class="field">
              <label>소개</label>
              <textarea id="memberBio">${esc(content.bio || '')}</textarea>
            </div>

            <div class="field">
              <label>태그</label>
              <input
                type="text"
                id="memberTags"
                value="${escAttr((content.tags || []).join(', '))}"
              >
            </div>

            <button
              class="btn btn-solid btn-sm"
              onclick="saveMemberContent('${member.id}')"
            >
              저장
            </button>

          </div>
          `
          : ''
        }

      </div>

    </div>
  `;
}

/* ===================== 사진 저장 ===================== */

async function handleHeroPhoto(input){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  const file = input.files && input.files[0];

  if(!file) return;

  if(file.size > MAX_HERO_INTRO_BYTES){
    alert(
      `사진은 ${formatBytes(MAX_HERO_INTRO_BYTES)} 이하만 업로드할 수 있습니다.`
    );
    input.value = '';
    return;
  }

  try{

    const dataUrl = await fileToDataUrl(file);

    const ok = await setPhoto(
      'photo-hero',
      dataUrl
    );

    if(!ok){
      alert('사진 저장에 실패했습니다.');
      return;
    }

    alert('사진이 저장되었습니다.');

    render();

  }catch(e){
    console.error(e);
    alert('사진을 읽는 중 오류가 발생했습니다.');
  }
}

async function handleIntroPhoto(input){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  const file = input.files && input.files[0];

  if(!file) return;

  if(file.size > MAX_HERO_INTRO_BYTES){
    alert(
      `사진은 ${formatBytes(MAX_HERO_INTRO_BYTES)} 이하만 업로드할 수 있습니다.`
    );
    input.value = '';
    return;
  }

  try{

    const dataUrl = await fileToDataUrl(file);

    const ok = await setPhoto(
      'photo-intro',
      dataUrl
    );

    if(!ok){
      alert('사진 저장에 실패했습니다.');
      return;
    }

    alert('사진이 저장되었습니다.');

    render();

  }catch(e){
    console.error(e);
    alert('사진을 읽는 중 오류가 발생했습니다.');
  }
}

async function handleMemberPhoto(input,id,detail=false){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  const file = input.files && input.files[0];

  if(!file) return;

  if(file.size > MAX_MEMBER_PHOTO_BYTES){
    alert(
      `구성원 사진은 ${formatBytes(MAX_MEMBER_PHOTO_BYTES)} 이하만 업로드할 수 있습니다.`
    );
    input.value = '';
    return;
  }

  try{

    const dataUrl = await fileToDataUrl(file);

    const ok = await saveMemberPhoto(
      id,
      dataUrl
    );

    if(!ok){
      alert('사진 저장에 실패했습니다.');
      return;
    }

    alert('사진이 저장되었습니다.');

    if(detail){
      location.hash = `#/members/${id}`;
    }

    render();

  }catch(e){
    console.error(e);
    alert('사진을 읽는 중 오류가 발생했습니다.');
  }
}

/* ===================== 소개 저장 ===================== */

async function saveIntro(){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  const title =
    document.getElementById('introTitle').value.trim();

  const text =
    document.getElementById('introText').value;

  if(!title){
    alert('제목을 입력해주세요.');
    return;
  }

  const oldData = await loadShared(
    'intro-content',
    DEFAULT_INTRO
  );

  const newData = {
    ...oldData,
    title,
    text
  };

  const ok = await saveShared(
    'intro-content',
    newData
  );

  if(!ok){
    alert('저장에 실패했습니다.');
    return;
  }

  alert('저장되었습니다.');

  render();
}

/* ===================== 구성원 내용 저장 ===================== */

async function saveMemberContent(id){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  const bio =
    document.getElementById('memberBio').value;

  const tagsText =
    document.getElementById('memberTags').value;

  const tags =
    tagsText
      .split(',')
      .map(x=>x.trim())
      .filter(Boolean);

  const allContent = await loadShared(
    'member-content',
    DEFAULT_MEMBER_CONTENT
  );

  allContent[id] = {
    bio,
    tags
  };

  const ok = await saveShared(
    'member-content',
    allContent
  );

  if(!ok){
    alert('저장에 실패했습니다.');
    return;
  }

  alert('저장되었습니다.');

  render();
}

/* ===================== 공지사항 추가 ===================== */

async function addNotice(){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  const title =
    document.getElementById('noticeTitle').value.trim();

  const body =
    document.getElementById('noticeBody').value;

  const fileInput =
    document.getElementById('noticeFile');

  if(!title){
    alert('제목을 입력해주세요.');
    return;
  }

  if(!body.trim()){
    alert('내용을 입력해주세요.');
    return;
  }

  let attachment = null;

  const file =
    fileInput.files && fileInput.files[0];

  if(file){

    if(file.size > MAX_NOTICE_FILE_BYTES){
      alert(
        `첨부파일은 ${formatBytes(MAX_NOTICE_FILE_BYTES)} 이하만 가능합니다.`
      );
      return;
    }

    try{

      attachment = {
        name:file.name,
        type:file.type,
        size:file.size,
        data:await fileToDataUrl(file)
      };

    }catch(e){
      alert('첨부파일을 읽을 수 없습니다.');
      return;
    }
  }

  const notices = await loadShared(
    'notices-data',
    DEFAULT_NOTICES
  );

  notices.unshift({
    id:Date.now(),
    title,
    body,
    author:currentUser,
    date:fmtDate(Date.now()),
    attachment
  });

  const ok = await saveShared(
    'notices-data',
    notices
  );

  if(!ok){
    alert('공지사항 저장에 실패했습니다.');
    return;
  }

  alert('공지사항이 등록되었습니다.');

  render();
}

async function deleteNotice(id){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  if(!confirm('이 공지사항을 삭제할까요?')){
    return;
  }

  const notices = await loadShared(
    'notices-data',
    DEFAULT_NOTICES
  );

  const filtered =
    notices.filter(n=>String(n.id)!==String(id));

  const ok = await saveShared(
    'notices-data',
    filtered
  );

  if(!ok){
    alert('삭제에 실패했습니다.');
    return;
  }

  render();
}

/* ===================== 게시판 추가 ===================== */

async function addPost(){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  const author =
    document.getElementById('postAuthor').value.trim()
    || currentUser;

  const body =
    document.getElementById('postBody').value;

  const fileInput =
    document.getElementById('postImage');

  if(!body.trim()){
    alert('내용을 입력해주세요.');
    return;
  }

  let image = null;

  const file =
    fileInput.files && fileInput.files[0];

  if(file){

    if(file.size > 1.5 * 1024 * 1024){
      alert('게시판 이미지는 1.5MB 이하만 업로드할 수 있습니다.');
      return;
    }

    try{
      image = await fileToDataUrl(file);
    }catch(e){
      alert('이미지를 읽을 수 없습니다.');
      return;
    }
  }

  const posts = await loadShared(
    'board-posts',
    DEFAULT_POSTS
  );

  posts.unshift({
    id:Date.now(),
    author,
    body,
    image,
    date:fmtDate(Date.now())
  });

  const ok = await saveShared(
    'board-posts',
    posts
  );

  if(!ok){
    alert('게시물 저장에 실패했습니다.');
    return;
  }

  alert('게시물이 등록되었습니다.');

  render();
}

async function deletePost(id){

  if(!currentUser){
    alert('로그인이 필요합니다.');
    return;
  }

  if(!confirm('이 게시물을 삭제할까요?')){
    return;
  }

  const posts = await loadShared(
    'board-posts',
    DEFAULT_POSTS
  );

  const filtered =
    posts.filter(p=>String(p.id)!==String(id));

  const ok = await saveShared(
    'board-posts',
    filtered
  );

  if(!ok){
    alert('삭제에 실패했습니다.');
    return;
  }

  render();
}

/* ===================== 페이지 렌더링 ===================== */

async function render(){

  const app =
    document.getElementById('app');

  if(!app) return;

  const route = getRoute();

  setActiveNav(route.page);

  app.innerHTML = `
    <div style="
      text-align:center;
      padding:60px 20px;
      color:var(--ink-soft);
    ">
      불러오는 중...
    </div>
  `;

  try{

    let html = '';

    switch(route.page){

      case 'home':
        html = await renderHome();
        break;

      case 'intro':
        html = await renderIntro();
        break;

      case 'notices':
        html = await renderNotices();
        break;

      case 'board':
        html = await renderBoard();
        break;

      case 'members':

        if(route.id){
          html = await renderMemberDetail(route.id);
        }else{
          html = await renderMembers();
        }

        break;

      default:
        location.hash = '#/home';
        return;
    }

    app.innerHTML = html;

    window.scrollTo({
      top:0,
      behavior:'instant'
    });

  }catch(e){

    console.error('Render error:',e);

    app.innerHTML = `
      <div class="empty-state">
        <div class="display">
          페이지를 불러오지 못했습니다.
        </div>

        <div style="margin-top:8px;">
          서버 또는 데이터베이스 연결을 확인해주세요.
        </div>

        <button
          class="btn btn-solid btn-sm"
          style="margin-top:18px;"
          onclick="render()"
        >
          다시 시도
        </button>
      </div>
    `;
  }
}

/* ===================== 시작 ===================== */

window.addEventListener('hashchange',()=>{
  render();
});

document.addEventListener('DOMContentLoaded',async()=>{

  await initAuth();

  if(!location.hash){
    location.hash = '#/home';
  }

  await render();

});
