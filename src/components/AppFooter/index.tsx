import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

import {
  FacebookOutlined as FacebookIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

import {
  ColumnGrid,
  SocialMediaRow,
} from './styles';

const pages = ['Home', 'Sobre Nós', 'Unidades', 'Contato'];

const AppFooter = () => (
  <Typography
    component="footer"
    sx={{ display: 'flex', bgcolor: 'primary.main' }}
  >
    <Container sx={{ my: 2, display: 'flex' }}>
      <Grid container spacing={5}>
        {/* Logo grid - first column */}
        <Grid item xs={6} sm={4} md={4}>
          <ColumnGrid
            container
            spacing={2}
          >
            <Grid item sx={{ display: 'flex' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                LOGO
              </Typography>
            </Grid>
          </ColumnGrid>
        </Grid>
        {/* Navitems grid - second column */}
        <Grid item xs={6} sm={4} md={4}>
          <ColumnGrid
            container
            spacing={2}
          >
            <Grid item sx={{ display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 3, color: 'text.primary', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Grid>
          </ColumnGrid>
        </Grid>
        {/* Order button grid - third column */}
        <Grid item xs={6} sm={4} md={4}>
          <ColumnGrid
            container
            spacing={2}
          >
            <Grid item sx={{ display: 'flex' }}>
              <Button variant="outlined" color="secondary">Faça seu pedido</Button>
            </Grid>
          </ColumnGrid>
        </Grid>
        {/* Social Media Row */}
        <SocialMediaRow item xs={12}>
          <Typography color="inherit">
            &copy; Rede Brasil Drugstore -
            {' '}
            {new Date().getFullYear()}
          </Typography>
          {/* Social Media Buttons */}
          <ButtonGroup disableElevation variant="contained">
            <IconButton
              aria-label="facebook"
              size="large"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <FacebookIcon fontSize="inherit" />
            </IconButton>

            <IconButton
              aria-label="instagram"
              size="large"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
          </ButtonGroup>
        </SocialMediaRow>
      </Grid>
    </Container>
  </Typography>
);

export default AppFooter;
