import * as React from 'react';
import { Theme, styled, SxProps } from '@mui/material/styles';
import {
  Box, Container, IconButton, useTheme, useMediaQuery,
} from '@mui/material';

import { Images } from '../../constants';

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

    const { breakpoints } = useTheme();
    const matches = useMediaQuery(breakpoints.up('sm'));
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
          {matches && (
            <IconButton
              color="secondary"
              onClick={() => handleScroll(nextSessionRef)}
              sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                bottom: 32,
                fontSize: 48,
              }}
            >
              <img src={Images.Mouse} width={64} alt="mouse scroll icon" />
            </IconButton>
          )}
        </Container>
      </ProductHeroLayoutRoot>
    );
  },
);

export default ProductHeroLayout;
