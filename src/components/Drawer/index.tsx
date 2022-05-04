import {
  forwardRef,
  Fragment,
  RefObject,
  useCallback,
  useState,
  useImperativeHandle,
} from 'react';

import {
  Button,
  Divider,
  ListItem,
  SwipeableDrawer,
  Typography,
} from '@mui/material';

import { IMarketplaceDialogHandle } from '../MarketplaceDialog';
import {
  DrawerBoxContent,
  DrawerPageList,
} from './styles';

export interface IDrawerProps {
  pages: Array<string>;
  refs: Array<RefObject<HTMLInputElement>>;
  dialogRef: RefObject<IMarketplaceDialogHandle>;
}

export interface IDrawerHandle {
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

const Drawer = forwardRef<IDrawerHandle, IDrawerProps>(({ pages, refs, dialogRef }: IDrawerProps, ref) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
    toggleDrawer: () => setDrawerOpen(!drawerOpen),
  }));

  const handleScroll = useCallback((scrollRef: RefObject<HTMLInputElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, []);

  return (
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
  );
});
export default Drawer;
