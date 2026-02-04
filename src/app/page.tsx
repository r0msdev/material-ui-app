import { Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StorageIcon from '@mui/icons-material/Storage';

export default function Home() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Material-UI + Next.js
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4 }}>
        A modern web application with responsive layout, theme switching, and routing.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <HomeIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome page with app overview and features
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <InfoIcon color="secondary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn more about this application and its features
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <StorageIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Data Test
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Test data fetching with loading states and API proxy
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Features
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Responsive sidebar navigation</li>
            <li>Light/Dark theme toggle</li>
            <li>Material-UI v7 components</li>
            <li>Next.js App Router</li>
            <li>TypeScript support</li>
            <li>Server-side rendering</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
