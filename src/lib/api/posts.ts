export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('/api/data');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
