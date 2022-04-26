import {
  forwardRef, useState, useImperativeHandle,
} from 'react';

import {
  Dialog,
  Grid,
  IconButton,
} from '@mui/material';

import {
  Close as CloseIcon,
} from '@mui/icons-material';

import CardShape from '../CardShape';
import { Images } from '../../constants';

import {
  CardGrid,
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
        <Grid container rowSpacing={2}>
          <CardGrid item xs={12} md={6}>
            <CardShape
              icon={<img src={Images.CardIcon1} alt="icon opt 0" height={64} width="auto" />}
              title={{ text: 'Distrito Federal e Entorno', weight: 700, size: 18 }}
              subtitle={{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.', weight: 400, size: 15 }}
              onClick={() => console.log('Card press 0')}
            />
          </CardGrid>
          <CardGrid item xs={12} md={6}>
            <CardShape
              icon={<img src={Images.CardIcon2} alt="icon opt 1" height={64} width="auto" />}
              title={{ text: 'Outras Regiões', weight: 700, size: 18 }}
              subtitle={{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.', weight: 400, size: 15 }}
              onClick={() => console.log('Card press 1')}
            />
          </CardGrid>
        </Grid>
      </DialogContentContainer>
    </Dialog>
  );
});

export default MarketplaceDialog;
