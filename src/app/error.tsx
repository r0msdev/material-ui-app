'use client';

import { ErrorState } from '@/shared/ui';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return <ErrorState error={error} onRetry={reset} retryLabel="Try again" />;
}
