import { RefObject, useCallback } from 'react';
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

import { Images } from '../../constants';
import {
  ColumnGrid,
  FooterContainer,
  NavitemsGrid,
  SocialMediaRow,
} from './styles';

export interface IAppFooterProps {
  pages: Array<string>;
  refs: Array<RefObject<HTMLInputElement>>;
}

const AppFooter = ({ pages, refs }: IAppFooterProps) => {
  const handleScroll = useCallback((ref: RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, []);

  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'primary.main', justifyContent: 'center' }}
    >
      <FooterContainer sx={{ my: 2, display: 'flex' }}>
        <Grid container spacing={4}>
          {/* Logo grid - first column */}
          <Grid item xs={12} sm={4} xl={3}>
            <ColumnGrid container>
              <Grid item sx={{ display: 'flex' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: 'flex' }}
                >
                  <img src={Images.Logo} height={45} width="auto" alt="brand logo" />
                </Typography>
              </Grid>
            </ColumnGrid>
          </Grid>
          {/* Navitems grid - second column */}
          <Grid item xs={12} sm={8} xl={6}>
            <NavitemsGrid container>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleScroll(refs[index])}
                  sx={{ color: 'text.primary' }}
                >
                  {page}
                </Button>
              ))}
            </NavitemsGrid>
          </Grid>
          {/* Order button grid - third column */}
          <Grid item xs={12} sm={6} xl={3}>
            <ColumnGrid container>
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
                href="https://www.facebook.com/redebrasildrugstore"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <FacebookIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="instagram"
                size="large"
                href="https://www.instagram.com/redebrasildrugstore/"
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
};
export default AppFooter;
