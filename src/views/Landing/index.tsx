import AppBar from '../../components/AppBar';
import ProductHero from '../../components/ProductHero';
import ProductCTA from '../ProductCTA';
import ProductCategories from '../ProductCategories';
import ProductSmokingHero from '../ProductSmokingHero';
import AppFooter from '../AppFooter';
import ProductValues from '../ProductValues';
import ProductHowItWorks from '../ProductHowItWorks';

import withRoot from '../../modules/withRoot';

function Landing() {
  return (
    <>
      <AppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Landing);
