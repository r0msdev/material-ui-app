import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorState from './ErrorState';

describe('ErrorState', () => {
  it('renders full block with default fallback message', () => {
    render(<ErrorState />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/something went wrong\. please try again/i)).toBeInTheDocument();
  });

  it('renders an Error object message', () => {
    render(<ErrorState error={new Error('Network error')} />);
    expect(screen.getByText('Network error')).toBeInTheDocument();
  });

  it('renders a string error message', () => {
    render(<ErrorState error="Forbidden" />);
    expect(screen.getByText('Forbidden')).toBeInTheDocument();
  });

  it('renders retry button and calls onRetry when clicked', async () => {
    const onRetry = vi.fn();
    render(<ErrorState onRetry={onRetry} />);
    await userEvent.click(screen.getByRole('button', { name: /try again/i }));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it('does not render a button when onRetry is omitted', () => {
    render(<ErrorState />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders inline Alert when inline=true', () => {
    const { container } = render(<ErrorState error="Oops" inline />);
    expect(container.querySelector('.MuiAlert-root')).toBeInTheDocument();
  });
});
