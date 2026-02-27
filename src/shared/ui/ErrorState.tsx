import { Box, Typography, Button, Alert } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ErrorStateProps {
  /** Error message or Error object to display. */
  error?: Error | string | null;
  /** Label for the retry button. Omit to hide the button. */
  retryLabel?: string;
  /** Callback invoked when the retry button is clicked. */
  onRetry?: () => void;
  /** Compact inline variant using an MUI Alert. Defaults to false (full block). */
  inline?: boolean;
}

export default function ErrorState({
  error,
  retryLabel = 'Try again',
  onRetry,
  inline = false,
}: ErrorStateProps) {
  const message =
    error instanceof Error
      ? error.message
      : (error ?? 'Something went wrong. Please try again.');

  if (inline) {
    return (
      <Alert
        severity="error"
        sx={{ mt: 2 }}
        action={
          onRetry && (
            <Button color="inherit" size="small" onClick={onRetry}>
              {retryLabel}
            </Button>
          )
        }
      >
        {message}
      </Alert>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        py: 8,
        textAlign: 'center',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 64, color: 'error.main' }} />
      <Typography variant="h5" component="h2" color="error">
        Something went wrong
      </Typography>
      <Typography variant="body2" color="text.secondary" maxWidth={400}>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="contained" color="error" onClick={onRetry}>
          {retryLabel}
        </Button>
      )}
    </Box>
  );
}
