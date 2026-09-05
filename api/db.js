import { neon } from '@neondatabase/serverless';

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL 환경변수가 없습니다.');
  }
  return neon(process.env.DATABASE_URL);
}

export const ALLOWED_KEYS = new Set([
  'intro-content',
  'notices-data',
  'board-posts',
  'member-content',
  'member-photos',
  'photo-hero',
  'photo-intro'
]);
