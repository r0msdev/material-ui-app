import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,  // Don't retry on failure — makes error tests predictable
        gcTime: 0,     // Immediately discard cached data between tests
      },
    },
  });
}

function QueryWrapper({ children }: { children: React.ReactNode }) {
  const queryClient = createTestQueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

/** Renders a component wrapped in a QueryClientProvider configured for testing. */
export function renderWithQuery(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: QueryWrapper, ...options });
}

// Re-export RTL utilities so test files only need to import from here.
export * from '@testing-library/react';
