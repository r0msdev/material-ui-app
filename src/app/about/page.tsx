import { Typography, Box, Paper, Chip, Stack } from '@mui/material';

export default function About() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        About This Application
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4 }}>
        This is a modern web application built with the latest technologies.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Technology Stack
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
          <Chip label="Next.js 16" color="primary" />
          <Chip label="React 19" color="primary" />
          <Chip label="Material-UI v7" color="secondary" />
          <Chip label="TypeScript" color="primary" />
          <Chip label="Emotion" color="secondary" />
        </Stack>
      </Paper>

      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Key Features
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Server-side rendering with Next.js App Router</li>
            <li>Responsive Material-UI components</li>
            <li>Light and dark theme support</li>
            <li>TypeScript for type safety</li>
            <li>Client-side data fetching with loading states</li>
            <li>API route proxy pattern</li>
            <li>Optimized font loading</li>
            <li>Production-ready build configuration</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
