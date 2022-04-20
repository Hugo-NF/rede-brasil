import { forwardRef } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { KeyboardArrowRight as ArrowRight } from '@mui/icons-material';

import {
  SocialMediaContainer,
} from './styles';

import { Images } from '../../constants';

const SocialMedia = forwardRef((_, ref) => {
  const { palette, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('md'));

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ display: 'flex', bgcolor: palette.primary.main }}
    >
      <SocialMediaContainer>
        <Grid
          container
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h2">Você já conhece nosso Instagram?</Typography>
            <Typography>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</Typography>
            <Button
              variant="text"
              href="https://www.instagram.com/redebrasildrugstore/"
              aria-label="Instagram account link"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              sx={{ paddingLeft: 0 }}
            >
              <Typography fontSize={18} color="secondary" sx={{ marginRight: 1 }}>
                Nos siga e ganhe prêmios!
              </Typography>
              <ArrowRight fontSize="medium" />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={Images.SocialMedia} height={matches ? 624 : 450} width="auto" alt="about us cover" />
          </Grid>
        </Grid>
        {/* <Grid container spacing={4}>
          {matches && (
            <>
              <Grid item xs={6}>
                <Typography>Já conhece nosso Instagram?</Typography>
              </Grid>
              <Grid item xs={6}>
                <img src={Images.SocialMedia} height={624} width="auto" alt="about us cover" />
              </Grid>
            </>
          )}
        </Grid> */}
      </SocialMediaContainer>
    </Box>
  );
});

export default SocialMedia;
