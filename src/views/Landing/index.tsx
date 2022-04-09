import { useRef } from 'react';
import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import ProductHero from '../../components/ProductHero';
import Units from '../../components/Units';
// import ProductCTA from '../ProductCTA';
// import ProductCategories from '../ProductCategories';
// import ProductSmokingHero from '../ProductSmokingHero';
// import ProductValues from '../ProductValues';

const Landing = () => {
  const ProductHeroRef = useRef<HTMLInputElement>(null);
  const UnitsRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <AppBar refs={[ProductHeroRef, UnitsRef]} />
      <ProductHero ref={ProductHeroRef} />
      {/* <ProductCTA /> */}
      {/* <ProductCategories /> */}
      {/* <ProductSmokingHero /> */}
      {/* <ProductValues /> */}
      <Units ref={UnitsRef} />
      <AppFooter />
    </>
  );
};

export default Landing;
