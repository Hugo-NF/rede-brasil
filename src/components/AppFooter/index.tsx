import {
  Button,
  ButtonGroup,
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
  FooterContainer,
  NavitemsGrid,
  SocialMediaRow,
} from './styles';

const pages = ['Home', 'Sobre Nós', 'Unidades', 'Clientes', 'Juridico', 'Contato'];

const AppFooter = () => (
  <Typography
    component="footer"
    sx={{ display: 'flex', bgcolor: 'primary.main', justifyContent: 'center' }}
  >
    <FooterContainer sx={{ my: 2, display: 'flex' }}>
      <Grid container spacing={4}>
        {/* Logo grid - first column */}
        <Grid item xs={12} sm={4} xl={3}>
          <ColumnGrid
            container
            spacing={2}
          >
            <Grid item sx={{ display: 'flex' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: 'flex' }}
              >
                LOGO
              </Typography>
            </Grid>
          </ColumnGrid>
        </Grid>
        {/* Navitems grid - second column */}
        <Grid item xs={12} sm={8} xl={6}>
          <NavitemsGrid
            container
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ color: 'text.primary' }}
              >
                {page}
              </Button>
            ))}
          </NavitemsGrid>
        </Grid>
        {/* Order button grid - third column */}
        <Grid item xs={12} sm={6} xl={3}>
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
        <SocialMediaRow item xs={12} sm={6} xl={12}>
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
    </FooterContainer>
  </Typography>
);

export default AppFooter;