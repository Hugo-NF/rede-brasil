import Button from '../Button';
import Typography from '../Typography';
import ProductHeroLayout from './layout';

const backgroundImage = 'https://images.unsplash.com/photo-1620059409361-37e0047f829e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80';

const ProductHero = () => (
  <ProductHeroLayout
    sxBackground={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    }}
  >
    {/* Increase the network loading priority of the background image. */}
    <img
      style={{ display: 'none' }}
      src={backgroundImage}
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
