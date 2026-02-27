'use client';

import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { fetchPosts } from '@/lib/api';
import { LoadingState, ErrorState } from '@/shared/ui';

export default function DataFetcher() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (error) {
    return <ErrorState error={error} inline />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Chip label="Data Loaded!" color="success" sx={{ mb: 2 }} />
      {(data ?? []).map((post) => (
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
