import Button from '../Button';
import Typography from '../Typography';
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
    <Typography color="inherit" align="center" variant="h2" marked="center">
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
    <Button
      color="secondary"
      variant="contained"
      size="large"
      component="a"
      href="/premium-themes/onepirate/sign-up/"
      sx={{ minWidth: 200 }}
    >
      Discover the experience
    </Button>
  </ProductHeroLayout>
);

export default ProductHero;
