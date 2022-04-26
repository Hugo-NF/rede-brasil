import {
  forwardRef, useState, useImperativeHandle,
} from 'react';

import {
  Dialog,
  IconButton,
} from '@mui/material';

import { Close as CloseIcon } from '@mui/icons-material';

import {
  DialogContentContainer,
  DialogTitle,
} from './styles';

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
      fullWidth
    >
      <IconButton
        autoFocus
        sx={{ display: 'flex', alignSelf: 'flex-end' }}
        onClick={() => setDialogOpen(false)}
      >
        <CloseIcon color="secondary" />
      </IconButton>
      <DialogContentContainer>
        <DialogTitle>
          Marketplace
        </DialogTitle>
      </DialogContentContainer>
    </Dialog>
  );
});

export default MarketplaceDialog;
