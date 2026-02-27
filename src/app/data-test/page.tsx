import { Box, Typography, Paper } from '@mui/material';
import { DataFetcher } from '@/features/data-test';

export default function DataTestPage() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Data Retrieval Test
      </Typography>
      
      <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          This page demonstrates the data-retrieval flow:
        </Typography>
        
        <Typography variant="body2" component="ol" sx={{ pl: 3 }}>
          <li>Server renders initial skeleton</li>
          <li>Client fetches data through API proxy</li>
          <li>UI renders final result</li>
        </Typography>
      </Paper>

      <DataFetcher />
    </Box>
  );
}
