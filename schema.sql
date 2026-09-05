-- 미래공학반 홈페이지 Neon DB 초기화 SQL

CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(30) PRIMARY KEY,
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS site_data (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_by VARCHAR(30),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS site_data_updated_at_idx
ON site_data (updated_at);
