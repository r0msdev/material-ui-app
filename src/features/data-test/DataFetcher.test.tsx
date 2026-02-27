import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithQuery } from '@/test/utils';
import DataFetcher from './DataFetcher';

vi.mock('@/lib/api', () => ({
  fetchPosts: vi.fn(),
}));

// Import after mock so we get the mocked version
import { fetchPosts } from '@/lib/api';

const mockPosts = [
  { userId: 1, id: 1, title: 'First Post', body: 'First body' },
  { userId: 1, id: 2, title: 'Second Post', body: 'Second body' },
];

describe('DataFetcher', () => {
  beforeEach(() => {
    vi.mocked(fetchPosts).mockResolvedValue(mockPosts);
  });

  it('shows loading skeleton initially', () => {
    renderWithQuery(<DataFetcher />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders posts after data loads', async () => {
    renderWithQuery(<DataFetcher />);
    await waitFor(() => {
      expect(screen.getByText('First Post')).toBeInTheDocument();
      expect(screen.getByText('Second Post')).toBeInTheDocument();
    });
    expect(screen.getByText('Data Loaded!')).toBeInTheDocument();
  });

  it('shows error state when fetch fails', async () => {
    vi.mocked(fetchPosts).mockRejectedValueOnce(new Error('Network error'));
    renderWithQuery(<DataFetcher />);
    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });
});
