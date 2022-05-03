import {
  Fragment, RefObject, useCallback, useState, useRef, ElementRef,
} from 'react';

import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material';

import MarketplaceDialog from '../MarketplaceDialog';

import {
  DrawerBoxContent, DrawerPageList, StyledAppBar, StyledButton,
} from './styles';
import { Images } from '../../constants';

export interface IResponsiveAppBarProps {
  pages: Array<string>;
  refs: Array<RefObject<HTMLInputElement>>;
}

const ResponsiveAppBar = ({ pages, refs }: IResponsiveAppBarProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const dialogRef = useRef<ElementRef<typeof MarketplaceDialog>>(null);

  const handleScroll = useCallback((ref: RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, []);

  return (
    <StyledAppBar position="sticky" sx={{ maxHeight: 80 }}>
      <Container maxWidth="xl">
        {/* Absolute position elements */}
        <MarketplaceDialog ref={dialogRef} />
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={Images.Logo} height={45} width="auto" alt="brand logo" />
          </Typography>

          {/* Mobile drawer */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu mobile icon button"
              aria-controls="menu-mobile"
              aria-haspopup="true"
              onClick={() => setDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={drawerOpen}
              onOpen={() => setDrawerOpen(true)}
              onClose={() => setDrawerOpen(false)}
              sx={{
                flex: 1,
                width: 100,
                display: { xs: 'block', md: 'none' },
              }}
            >
              <DrawerBoxContent>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => dialogRef.current?.openDialog()}
                  sx={{ borderWidth: 2 }}
                >
                  <Typography>Faça seu pedido</Typography>
                </Button>
                <DrawerPageList>
                  {pages.map((page, index) => (
                    <Fragment key={page}>
                      <ListItem
                        onClick={() => handleScroll(refs[index])}
                      >
                        <Typography textAlign="center" color="text.secondary">{page}</Typography>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  ))}
                </DrawerPageList>
              </DrawerBoxContent>
            </SwipeableDrawer>
          </Box>

          {/* Mobile logo image */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={Images.Logo} height={45} width="auto" alt="brand logo" />
          </Typography>

          {/* Desktop pages bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                sx={{ my: 3, color: 'white', display: 'block' }}
                onClick={() => handleScroll(refs[index])}
              >
                <Typography textTransform="none">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* WhatsApp buy dialog */}
          <Box sx={{ flexGrow: 0 }}>
            <StyledButton
              variant="outlined"
              color="secondary"
              onClick={() => dialogRef.current?.openDialog()}
              sx={{ display: { xs: 'none', md: 'block' }, borderWidth: 2, borderRadius: 2 }}
            >
              <Typography>
                Faça seu pedido
              </Typography>
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default ResponsiveAppBar;
