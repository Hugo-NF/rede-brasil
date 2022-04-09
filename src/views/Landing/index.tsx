import { useRef } from 'react';
import AboutUs from '../../components/AboutUs';
import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import ProductHero from '../../components/ProductHero';
import SocialMedia from '../../components/SocialMedia';
import Units from '../../components/Units';
// import ProductSmokingHero from '../ProductSmokingHero';
// import ProductCategories from '../ProductCategories';
// import ProductValues from '../ProductValues';

const pages = ['Início', 'Sobre Nós', 'Midias Sociais', 'Unidades'];

const Landing = () => {
  const ProductHeroRef = useRef<HTMLInputElement>(null);
  const AboutUsRef = useRef<HTMLInputElement>(null);
  const SocialMediaRef = useRef<HTMLInputElement>(null);
  const UnitsRef = useRef<HTMLInputElement>(null);

  const refs = [ProductHeroRef, AboutUsRef, SocialMediaRef, UnitsRef];

  return (
    <>
      <AppBar pages={pages} refs={refs} />
      <ProductHero ref={ProductHeroRef} nextSessionRef={AboutUsRef} />
      <AboutUs ref={AboutUsRef} />
      <SocialMedia ref={SocialMediaRef} />
      {/* <ProductCategories /> */}
      {/* <ProductValues /> */}
      <Units ref={UnitsRef} />
      <AppFooter pages={pages} refs={refs} />
    </>
  );
};

export default Landing;
