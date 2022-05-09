import { useRef } from 'react';
import AppBar from '../../components/AppBar';
import ProductHero from '../../components/ProductHero';
import AboutUs from '../../components/AboutUs';
import VideoDisplay from '../../components/VideoDisplay';
import SocialMedia from '../../components/SocialMedia';
import Testimonials from '../../components/Testimonials';
import Units from '../../components/Units';
import ContactUs from '../../components/ContactUs';
import AppFooter from '../../components/AppFooter';

// Home, Sobre Nós, Unidades, Avaliações e Fale Conosco
const pages = ['Home', 'Sobre Nós', 'Avaliações', 'Unidades', 'Fale Conosco'];

const Landing = () => {
  const ProductHeroRef = useRef<HTMLInputElement>(null);
  const AboutUsRef = useRef<HTMLInputElement>(null);
  const TestimonialsRef = useRef<HTMLInputElement>(null);
  const UnitsRef = useRef<HTMLInputElement>(null);
  const ContactUsRef = useRef<HTMLInputElement>(null);

  const refs = [ProductHeroRef, AboutUsRef, TestimonialsRef, UnitsRef, ContactUsRef];

  return (
    <>
      <AppBar pages={pages} refs={refs} />
      <ProductHero ref={ProductHeroRef} refs={refs} />
      <AboutUs ref={AboutUsRef} />
      <VideoDisplay />
      <SocialMedia />
      <Testimonials ref={TestimonialsRef} />
      <Units ref={UnitsRef} />
      <ContactUs ref={ContactUsRef} />
      <AppFooter pages={pages} refs={refs} />
    </>
  );
};

export default Landing;
