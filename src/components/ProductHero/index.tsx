import { forwardRef, Ref, RefObject } from 'react';
import { Typography, useTheme } from '@mui/material';
import ProductHeroLayout from './layout';

import { Images } from '../../constants';

export interface IProductHeroProps {
  nextSessionRef: RefObject<HTMLInputElement>;
}

const ProductHero = forwardRef(({ nextSessionRef }: IProductHeroProps, ref: Ref<HTMLElement> | undefined) => {
  const { palette } = useTheme();

  return (
    <ProductHeroLayout
      ref={ref}
      nextSessionRef={nextSessionRef}
      sxBackground={{
        backgroundImage: `url(${Images.HeroCover})`,
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
        What is Lorem Ipsum?
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typography>
    </ProductHeroLayout>
  );
});

export default ProductHero;
