import { Button, Link, Typography, Container, Box, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Material-UI + Next.js Routing Integration
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          Link Component Examples
        </Typography>
        
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Link href="/" underline="hover">
            Link to Home (using MUI Link component)
          </Link>
          
          <Link href="/about" underline="hover" color="secondary">
            Link to About Page
          </Link>
        </Stack>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          Button Component Examples
        </Typography>
        
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            href="/" 
            startIcon={<HomeIcon />}
          >
            Home Button
          </Button>
          
          <Button 
            variant="outlined" 
            href="/about"
            startIcon={<InfoIcon />}
          >
            About Button
          </Button>
        </Stack>

        <Typography variant="body1" sx={{ mt: 4 }}>
          These components use Next.js Link under the hood for client-side navigation,
          configured globally in the theme.
        </Typography>
      </Box>
    </Container>
  );
}
