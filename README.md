# 미래공학반 홈페이지 — GitHub + Vercel + Neon

## 폴더 구조

```text
future-engineering-class/
├─ index.html
├─ style.css
├─ script.js
├─ package.json
├─ vercel.json
├─ .env.example
├─ schema.sql
└─ api/
   ├─ db.js
   ├─ auth.js
   └─ data.js
```

## 1. Neon DB 만들기

Neon 프로젝트를 만든 뒤 SQL Editor에서 `schema.sql` 전체를 실행합니다.

## 2. Vercel 환경변수

Vercel 프로젝트의 Settings → Environment Variables에 다음 2개를 추가합니다.

- `DATABASE_URL` = Neon의 연결 문자열
- `SESSION_SECRET` = 길고 랜덤한 비밀 문자열

예시는 `.env.example`에 있습니다.

## 3. GitHub

이 폴더의 파일 전체를 GitHub 저장소에 업로드합니다.

## 4. Vercel

Vercel에서 해당 GitHub 저장소를 Import → Deploy 하면 됩니다.

## 현재 동작

- 회원가입/로그인: Neon DB에 저장
- 로그인 상태: HttpOnly 세션 쿠키
- 학급 소개 수정: Neon DB 공유
- 공지사항: Neon DB 공유
- 학급 게시판: Neon DB 공유
- 구성원 소개 수정: Neon DB 공유
- 구성원/대표 사진: 현재는 작은 이미지 Data URL을 Neon JSONB에 저장

### 사진에 대한 주의

현재 버전은 별도 파일 스토리지를 사용하지 않고 사진을 DB에 저장합니다.
학교 프로젝트나 소규모 사이트에는 간단하지만, 사진이 많아지면 DB 용량과 요청 크기가 커질 수 있습니다.
그 경우 Vercel Blob 같은 이미지 저장소로 분리하는 것이 좋습니다.

## 보안

비밀번호는 평문으로 DB에 저장하지 않고 Node.js `scrypt`로 해시합니다.
세션은 HttpOnly + Secure 쿠키를 사용합니다.

## 주의

현재 사이트의 "로그인한 사용자"는 소개글/사진/공지/게시판을 수정할 수 있는 권한을 공유합니다.
관리자와 일반 사용자를 분리하려면 users 테이블에 role을 추가하고 API에서 권한을 검사하면 됩니다.
