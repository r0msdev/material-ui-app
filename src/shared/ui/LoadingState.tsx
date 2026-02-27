import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Chip,
  Skeleton,
} from '@mui/material';

interface LoadingStateProps {
  /** Visual pattern to render. Defaults to 'cards'. */
  variant?: 'cards' | 'spinner' | 'text';
  /** Number of skeleton items to render. Defaults to 3. */
  count?: number;
  /** Label shown above the skeleton. Not shown for 'spinner'. */
  label?: string;
}

export default function LoadingState({
  variant = 'cards',
  count = 3,
  label = 'Loading...',
}: LoadingStateProps) {
  if (variant === 'spinner') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (variant === 'text') {
    return (
      <Box sx={{ mt: 2 }}>
        {label && <Chip label={label} color="primary" sx={{ mb: 2 }} />}
        {Array.from({ length: count }).map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            width={i % 3 === 2 ? '70%' : '100%'}
            height={24}
            sx={{ mb: 0.5 }}
          />
        ))}
      </Box>
    );
  }

  // cards (default)
  return (
    <Box sx={{ mt: 2 }}>
      {label && <Chip label={label} color="primary" sx={{ mb: 2 }} />}
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} sx={{ mb: 2 }}>
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
