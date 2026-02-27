import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchPosts } from './posts';

const mockPosts = [
  { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
  { userId: 1, id: 2, title: 'Post 2', body: 'Body 2' },
];

describe('fetchPosts', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches from /api/data and returns posts', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    } as Response);

    const posts = await fetchPosts();

    expect(fetch).toHaveBeenCalledWith('/api/data');
    expect(posts).toEqual(mockPosts);
  });

  it('throws when response is not ok', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
    } as Response);

    await expect(fetchPosts()).rejects.toThrow('Failed to fetch data');
  });
});
