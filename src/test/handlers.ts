import { http, HttpResponse } from 'msw';
import type { Post } from '@/lib/api';

export const mockPosts: Post[] = [
  { userId: 1, id: 1, title: 'First Post', body: 'First body' },
  { userId: 1, id: 2, title: 'Second Post', body: 'Second body' },
  { userId: 1, id: 3, title: 'Third Post', body: 'Third body' },
];

// Handlers intercept requests made during integration tests.
// Use server.use(http.get(...)) inside a test to override for a specific case.
export const handlers = [
  http.get('*/api/data', () => {
    return HttpResponse.json(mockPosts);
  }),
];
