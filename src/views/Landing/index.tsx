import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import ProductHero from '../../components/ProductHero';
import ProductUnits from '../../components/Units';
// import ProductCTA from '../ProductCTA';
// import ProductCategories from '../ProductCategories';
// import ProductSmokingHero from '../ProductSmokingHero';
// import ProductValues from '../ProductValues';

const Landing = () => (
  <>
    <AppBar />
    <ProductHero />
    {/* <ProductCTA /> */}
    {/* <ProductCategories /> */}
    {/* <ProductSmokingHero /> */}
    {/* <ProductValues /> */}
    <ProductUnits />
    <AppFooter />
  </>
);

export default Landing;
