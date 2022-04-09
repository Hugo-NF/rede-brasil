import * as React from 'react';
import { Theme, styled, SxProps } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    height: '90vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

const ProductHeroLayout = React.forwardRef(({ sxBackground, children }: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps, ref: React.LegacyRef<HTMLElement> | undefined) => (
  <ProductHeroLayoutRoot ref={ref}>
    <Container
      sx={{
        mt: 3,
        mb: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
      <Background sx={sxBackground} />
      <ArrowDownIcon fontSize="large" sx={{ position: 'absolute', bottom: 32 }} />
    </Container>
  </ProductHeroLayoutRoot>
));

export default ProductHeroLayout;
