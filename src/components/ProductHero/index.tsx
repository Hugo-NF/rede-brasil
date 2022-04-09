import { Typography } from '@mui/material';
import ProductHeroLayout from './layout';

import { Images } from '../../constants';

const ProductHero = () => (
  <ProductHeroLayout
    sxBackground={{
      backgroundImage: `url(${Images.HeroCover})`,
      backgroundColor: '#d3dadb', // Average color of the background image.
      backgroundPosition: 'center',
    }}
  >
    {/* Increase the network loading priority of the background image. */}
    <img
      style={{ display: 'none' }}
      src={Images.HeroCover}
      alt="increase priority"
    />
    <Typography color="inherit" align="center" variant="h2">
      What is Lorem Ipsum?
    </Typography>
    <Typography
      color="inherit"
      align="center"
      variant="h5"
      sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
  </ProductHeroLayout>
);

export default ProductHero;
