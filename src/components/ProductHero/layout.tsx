import * as React from 'react';
import { Theme, styled, SxProps } from '@mui/material/styles';
import { Box, Container, IconButton } from '@mui/material';

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
  nextSessionRef: React.RefObject<HTMLInputElement>;
}

const ProductHeroLayout = React.forwardRef(
  (
    { sxBackground, nextSessionRef, children }: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps,
    ref: React.LegacyRef<HTMLElement> | undefined,
  ) => {
    const handleScroll = React.useCallback((scrollRef: React.RefObject<HTMLInputElement>) => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }, []);

    return (
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
          <IconButton color="secondary" onClick={() => handleScroll(nextSessionRef)} sx={{ position: 'absolute', bottom: 32 }}>
            <ArrowDownIcon fontSize="large" color="inherit" />
          </IconButton>
        </Container>
      </ProductHeroLayoutRoot>
    );
  },
);

export default ProductHeroLayout;
