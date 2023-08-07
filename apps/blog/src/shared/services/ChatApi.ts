import { makeRequest } from '../lib/fetcher.ts';

const CHAT_API_URL = 'http://localhost:8888/chat';
export function createChat(prompt: string) {
  return makeRequest<{ role: string; content: string }>(CHAT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: `Сгенерируй пожалуйста статью на тему  ${prompt}`,
    }),
  });
}
