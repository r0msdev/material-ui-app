import { Button, Typography, Container, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Page
        </Typography>
        
        <Typography variant="body1" paragraph>
          This is an example about page demonstrating routing with Material-UI and Next.js.
        </Typography>

        <Typography variant="body1" paragraph>
          The navigation is handled by Next.js Link component, wrapped with Material-UI
          styling and configured globally in the theme.
        </Typography>

        <Button 
          variant="contained" 
          href="/" 
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
