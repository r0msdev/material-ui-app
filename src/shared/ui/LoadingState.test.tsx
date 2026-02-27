import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingState from './LoadingState';

describe('LoadingState', () => {
  it('renders card skeletons with label by default', () => {
    const { container } = render(<LoadingState />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(container.querySelectorAll('.MuiCard-root')).toHaveLength(3);
  });

  it('renders custom count of cards', () => {
    const { container } = render(<LoadingState count={5} />);
    expect(container.querySelectorAll('.MuiCard-root')).toHaveLength(5);
  });

  it('renders spinner variant without label', () => {
    const { container } = render(<LoadingState variant="spinner" label="ignored" />);
    expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    expect(screen.queryByText('ignored')).not.toBeInTheDocument();
  });

  it('renders text variant with custom label', () => {
    render(<LoadingState variant="text" label="Fetching..." />);
    expect(screen.getByText('Fetching...')).toBeInTheDocument();
  });
});
