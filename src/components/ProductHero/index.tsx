import {
  forwardRef, Ref, RefObject, useEffect, useMemo, useState,
} from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import ProductHeroLayout from './layout';

import { Images } from '../../constants';

export interface IProductHeroProps {
  refs: Array<RefObject<HTMLInputElement>>;
}

const ProductHero = forwardRef(({ refs }: IProductHeroProps, ref: Ref<HTMLElement> | undefined) => {
  const { palette, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));
  const [slide, setSlide] = useState<number>(0);

  const covers = useMemo(() => ([
    {
      image: Images.HeroCover1,
      title: <Typography color="inherit" align="center" fontSize={matches ? 64 : 32} fontWeight={700} sx={{ color: palette.getContrastText('#000000') }}>REDE BRASIL</Typography>,
      subtitle: <Typography color="inherit" align="center" fontSize={matches ? 30 : 18} sx={{ mt: 2, color: palette.getContrastText('#000000') }}>Cuidando de você e te servindo com o melhor</Typography>,
      refIndex: 1,
    },
    {
      image: Images.HeroCover2,
      title: <Typography color="inherit" align="center" fontSize={matches ? 64 : 32} fontWeight={700} sx={{ color: palette.getContrastText('#000000') }}>MEDICAMENTOS DE ALTO CUSTO</Typography>,
      subtitle: <Typography color="inherit" align="center" fontSize={matches ? 30 : 18} sx={{ mt: 2, color: palette.getContrastText('#000000') }}>Cobrimos qualquer orçamento, solicite uma proposta. Proposta para demanda judicial.</Typography>,
      refIndex: 4,
    },
  ]), [palette, matches]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((current: number) => (current === covers.length - 1 ? 0 : current + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ProductHeroLayout
      ref={ref}
      nextSessionRef={refs[covers[slide].refIndex]}
      sxBackground={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        marginTop: -30,
        backgroundImage: `url(${Images.Transition}), linear-gradient(rgba(0, 0, 0, 0.427),rgba(0, 0, 0, 0.4)), url(${covers[slide].image})`,
        backgroundColor: 'black', // Average color of the background image.
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'bottom, top, bottom',
        backgroundSize: 'auto, cover, cover',
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
      {covers[slide].title}
      {covers[slide].subtitle}
    </ProductHeroLayout>
  );
});

export default ProductHero;
