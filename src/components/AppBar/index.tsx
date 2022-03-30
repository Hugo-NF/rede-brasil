import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material';
import { DrawerBoxContent, DrawerPageList } from "./styles";

const pages = ["Home", "Sobre Nós", "Unidades", "Contato"];

const ResponsiveAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          {/* Mobile drawer */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
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
                display: { xs: "block", md: "none" }
              }}
            >
              <DrawerBoxContent>
                <Button variant="contained" color="secondary" onClick={() => setDialogOpen(true)}>Compre Agora</Button>
                <DrawerPageList>
                  {pages.map((page) => (
                    <>
                      <ListItem key={page} onClick={() => setDrawerOpen(false)}>
                        <Typography textAlign="center">{page}</Typography>
                      </ListItem>
                      <Divider />
                    </>
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
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>

          {/* Desktop pages bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center"
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 3, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* WhatsApp buy dialog */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setDialogOpen(true)}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Compre Agora
            </Button>
            <Dialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              maxWidth="md"
            >
              <DialogTitle>
                Comprar
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour and the like).
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={() => setDialogOpen(false)}>
                  Cancelar
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default ResponsiveAppBar;