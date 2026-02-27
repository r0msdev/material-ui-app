'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Skeleton,
  Box,
  Alert,
  Chip,
} from '@mui/material';
import { fetchPosts, type Post } from '@/lib/api';

export default function DataFetcher() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchPosts();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    // Simulate a slight delay to see the skeleton
    const timer = setTimeout(fetchData, 500);
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Error: {error}
      </Alert>
    );
  }

  if (loading) {
    return (
      <Box sx={{ mt: 2 }}>
        <Chip label="Loading..." color="primary" sx={{ mb: 2 }} />
        {[1, 2, 3].map((item) => (
          <Card key={item} sx={{ mb: 2 }}>
            <CardContent>
              <Skeleton variant="text" width="60%" height={32} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="80%" />
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Chip label="Data Loaded!" color="success" sx={{ mb: 2 }} />
      {data.map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
            <Chip
              label={`User ID: ${post.userId}`}
              size="small"
              sx={{ mt: 1 }}
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
