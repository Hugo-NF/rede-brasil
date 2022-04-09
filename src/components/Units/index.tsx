import {
  Box,
  Grid,
} from '@mui/material';

import ImageCard from '../ImageCard';
import {
  Title,
  UnitsContainer,
} from './styles';

const ProductUnits = () => (
  <Box
    component="section"
    sx={{ display: 'flex', bgcolor: 'background.main', overflow: 'hidden' }}
  >
    <UnitsContainer>
      <Title variant="h4">
        Unidades
      </Title>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ImageCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ImageCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ImageCard />
        </Grid>
      </Grid>
    </UnitsContainer>
  </Box>
);

export default ProductUnits;
