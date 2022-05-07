import {
  forwardRef, Ref, RefObject, useEffect, useMemo, useState,
} from 'react';
import { Typography, useTheme } from '@mui/material';
import ProductHeroLayout from './layout';

import { Images } from '../../constants';

export interface IProductHeroProps {
  nextSessionRef: RefObject<HTMLInputElement>;
}

const ProductHero = forwardRef(({ nextSessionRef }: IProductHeroProps, ref: Ref<HTMLElement> | undefined) => {
  const { palette } = useTheme();

  const [slide, setSlide] = useState<number>(0);

  const covers = useMemo(() => ([
    {
      image: Images.HeroCover1,
      title: <Typography color="inherit" align="center" fontSize={64} fontWeight={700} sx={{ color: palette.getContrastText('#000000') }}>REDE BRASIL</Typography>,
      subtitle: <Typography color="inherit" align="center" fontSize={30} sx={{ mt: 2, color: palette.getContrastText('#000000') }}>Cuidando de você e te servindo com o melhor</Typography>,
    },
    {
      image: Images.HeroCover2,
      title: <Typography color="inherit" align="center" fontSize={64} fontWeight={700} sx={{ color: palette.getContrastText('#000000') }}>REDE BRASIL</Typography>,
      subtitle: <Typography color="inherit" align="center" fontSize={30} sx={{ mt: 2, color: palette.getContrastText('#000000') }}>Cuidando de você e te servindo com o melhor</Typography>,
    },
    {
      image: Images.HeroCover3,
      title: <Typography color="inherit" align="center" fontSize={64} fontWeight={700} sx={{ color: palette.getContrastText('#000000') }}>REDE BRASIL</Typography>,
      subtitle: <Typography color="inherit" align="center" fontSize={30} sx={{ mt: 2, color: palette.getContrastText('#000000') }}>Cuidando de você e te servindo com o melhor</Typography>,
    },
  ]), [palette]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((current: number) => (current === covers.length - 1 ? 0 : current + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ProductHeroLayout
      ref={ref}
      nextSessionRef={nextSessionRef}
      sxBackground={{
        marginTop: -25,
        minHeight: 1080,
        backgroundImage: `url(${Images.Transition}), linear-gradient(rgba(0, 0, 0, 0.427),rgba(0, 0, 0, 0.4)), url(${covers[slide].image})`,
        backgroundColor: 'black', // Average color of the background image.
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'bottom, top, bottom',
        backgroundSize: 'auto, cover, 1920px 1000px',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover1}
        alt="increase priority"
      />
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover2}
        alt="increase priority"
      />
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover3}
        alt="increase priority"
      />
      {covers[slide].title}
      {covers[slide].subtitle}
    </ProductHeroLayout>
  );
});

export default ProductHero;
