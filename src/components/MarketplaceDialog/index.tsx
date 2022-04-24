import {
  forwardRef, useState, useImperativeHandle,
} from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export interface IMarketplaceDialogHandle {
  openDialog: () => void;
  closeDialog: () => void;
  toggleDialog: () => void;
}

const MarketplaceDialog = forwardRef<IMarketplaceDialogHandle, object>((_, ref) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    openDialog: () => setDialogOpen(true),
    closeDialog: () => setDialogOpen(false),
    toggleDialog: () => setDialogOpen(!dialogOpen),
  }));

  return (
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
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
          and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the like).
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setDialogOpen(false)}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default MarketplaceDialog;
