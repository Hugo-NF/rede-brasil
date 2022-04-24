import { useRef } from 'react';
import AboutUs from '../../components/AboutUs';
import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import ProductHero from '../../components/ProductHero';
import SocialMedia from '../../components/SocialMedia';
import Testimonials from '../../components/Testimonials';
import VideoDisplay from '../../components/VideoDisplay';
import Units from '../../components/Units';

// Home, Sobre Nós, Unidades, Avaliações e Fale Conosco
const pages = ['Home', 'Sobre Nós', 'Avaliações', 'Unidades'];

const Landing = () => {
  const ProductHeroRef = useRef<HTMLInputElement>(null);
  const AboutUsRef = useRef<HTMLInputElement>(null);
  const TestimonialsRef = useRef<HTMLInputElement>(null);
  const UnitsRef = useRef<HTMLInputElement>(null);

  const refs = [ProductHeroRef, AboutUsRef, TestimonialsRef, UnitsRef];

  return (
    <>
      <AppBar pages={pages} refs={refs} />
      <ProductHero ref={ProductHeroRef} nextSessionRef={AboutUsRef} />
      <AboutUs ref={AboutUsRef} />
      <VideoDisplay />
      <SocialMedia />
      <Testimonials ref={TestimonialsRef} />
      {/* <ProductCategories /> */}
      {/* <ProductValues /> */}
      <Units ref={UnitsRef} />
      <AppFooter pages={pages} refs={refs} />
    </>
  );
};

export default Landing;
