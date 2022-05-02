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
    image: Images.HeroCover1,
    title: 'Title 0',
    subtitle: 'Subtitle 0',
  },
  {
    image: Images.HeroCover2,
    title: 'Slide 1',
    subtitle: 'Subtitle 1',
  },
  {
    image: Images.HeroCover3,
    title: 'Slide 2',
    subtitle: 'Subtitle 2',
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
        marginTop: -60,
        minHeight: 1080,
        backgroundImage: `url(${covers[slide].image})`,
        backgroundColor: palette.background.default, // Average color of the background image.
        backgroundPosition: 'center',
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
