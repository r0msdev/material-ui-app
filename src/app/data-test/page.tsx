import { Container, Box, Typography } from '@mui/material';
import DataFetcher from './DataFetcher';

export default function DataTestPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Data Retrieval Test
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          This page demonstrates the data-retrieval flow:
        </Typography>
        
        <Box component="ol" sx={{ mb: 3, pl: 2 }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Server renders initial skeleton
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            Client fetches data through API proxy
          </Typography>
          <Typography component="li" sx={{ mb: 1 }}>
            UI renders final result
          </Typography>
        </Box>

        <DataFetcher />
      </Box>
    </Container>
  );
}
