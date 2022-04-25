import {
  forwardRef, Ref, RefObject, useEffect, useState,
} from 'react';
import { Typography, useTheme } from '@mui/material';
import ProductHeroLayout from './layout';

import { Images } from '../../constants';

export interface IProductHeroProps {
  nextSessionRef: RefObject<HTMLInputElement>;
}

const covers = [
  {
    image: Images.HeroCover,
    title: 'Slide 0',
    subtitle: 'Lorem Ipsum 0',
  },
];

const ProductHero = forwardRef(({ nextSessionRef }: IProductHeroProps, ref: Ref<HTMLElement> | undefined) => {
  const { palette } = useTheme();

  const [slide, setSlide] = useState<number>(0);

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
        backgroundImage: `url(${covers[slide].image})`,
        backgroundColor: palette.background.default, // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={Images.HeroCover}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        {covers[slide].title}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {covers[slide].subtitle}
      </Typography>
    </ProductHeroLayout>
  );
});

export default ProductHero;
