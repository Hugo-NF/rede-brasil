import { forwardRef, useMemo } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { KeyboardArrowRight as ArrowRight } from '@mui/icons-material';

import CardShape from '../CardShape';

import useWindowSize from '../../hooks/useWindowSize';
import { Images } from '../../constants';

import {
  CardGrid,
  SocialMediaContainer,
} from './styles';

const SocialMedia = forwardRef((_, ref) => {
  const { palette, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('md'));
  const { width, height } = useWindowSize();

  const windowWidth = useMemo(() => (width || 1920), [width]);
  const windowHeight = useMemo(() => (height || 1080), [height]);

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
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: matches ? 'flex-start' : 'center' }}>
            <Typography variant="h3">
              Quer Ficar por Dentro De Todas As Novidades?
            </Typography>
            <Typography mt={2} fontSize={22}>
              Nos acompanhe nas redes sociais e confira conteúdos exclusivos
            </Typography>
            <Button
              variant="text"
              href="https://www.instagram.com/redebrasildrugstore/"
              aria-label="Instagram account link"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              sx={{ paddingLeft: 0, alignSelf: matches ? 'flex-start' : 'center' }}
            >
              <Typography fontSize={18} color="secondary" sx={{ marginRight: 1 }} textTransform="none">
                Nos Siga E Ganhe Prêmios!
              </Typography>
              <ArrowRight fontSize="medium" />
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Images.SocialMedia} height={matches ? 624 : 450} width="auto" alt="about us cover" />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: windowWidth > breakpoints.values.lg ? 400 : 1000,
            borderRadius: windowHeight > windowWidth ? '25%' : '40%',
            backgroundColor: 'white',
            width: windowWidth + 200,
            marginTop: -10,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={4}
            sx={{ width: '70%', minHeight: windowHeight > windowWidth ? 1000 : 650 }}
          >
            <CardGrid item sm={12} md={6} lg={4}>
              <CardShape
                icon={<img src={Images.CardIcon1} alt="icon opt 0" height={64} width="auto" />}
                title={{ text: 'Entrega', weight: 700, size: 24 }}
                subtitle={{ text: 'Peça no conforto da sua casa', weight: 400, size: 16 }}
              />
            </CardGrid>
            <CardGrid item sm={12} md={6} lg={4}>
              <CardShape
                icon={<img src={Images.CardIcon2} alt="icon opt 0" height={64} width="auto" />}
                title={{ text: 'Descontos', weight: 700, size: 24 }}
                subtitle={{ text: 'O produto que você deseja com desconto nos principais laboratórios', weight: 400, size: 16 }}
              />
            </CardGrid>
            <CardGrid item sm={12} md={6} lg={4}>
              <CardShape
                icon={<img src={Images.CardIcon3} alt="icon opt 0" height={64} width="auto" />}
                title={{ text: 'Farmácia Popular', weight: 700, size: 24 }}
                subtitle={{ text: 'Aqui Temos Farmácia Popular', weight: 400, size: 16 }}
              />
            </CardGrid>
          </Grid>
        </Grid>
      </SocialMediaContainer>
    </Box>
  );
});

export default SocialMedia;
