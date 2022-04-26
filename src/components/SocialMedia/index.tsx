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

import { Images } from '../../constants';
import CardShape from '../CardShape';

import {
  CardGrid,
  SocialMediaContainer,
} from './styles';

const SocialMedia = forwardRef((_, ref) => {
  const { palette, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('md'));

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ display: 'flex', bgcolor: palette.primary.dark }}
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
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            backgroundColor: 'white',
          }}
        >
          <CardGrid item xs={12} md={4}>
            <CardShape
              icon={<img src={Images.CardIcon1} alt="icon opt 0" height={32} width="auto" />}
              title={{ text: 'Entrega', weight: 700, size: 24 }}
              subtitle={{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.', weight: 400, size: 18 }}
            />
          </CardGrid>
          <CardGrid item xs={12} md={4}>
            <CardShape
              icon={<img src={Images.CardIcon2} alt="icon opt 0" height={32} width="auto" />}
              title={{ text: 'Descontos', weight: 700, size: 24 }}
              subtitle={{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.', weight: 400, size: 18 }}
            />
          </CardGrid>
          <CardGrid item xs={12} md={4}>
            <CardShape
              icon={<img src={Images.CardIcon3} alt="icon opt 0" height={32} width="auto" />}
              title={{ text: 'Farmácia Popular', weight: 700, size: 24 }}
              subtitle={{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.', weight: 400, size: 18 }}
            />
          </CardGrid>
        </Grid>
      </SocialMediaContainer>
    </Box>
  );
});

export default SocialMedia;
