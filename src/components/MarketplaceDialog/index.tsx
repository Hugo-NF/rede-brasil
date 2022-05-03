import {
  ElementRef,
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
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
import BuyDialog from '../BuyDialog';
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
  const buyRef = useRef<ElementRef<typeof BuyDialog>>(null);

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
      <BuyDialog ref={buyRef} />
      <IconButton
        autoFocus
        sx={{ display: 'flex', alignSelf: 'flex-end' }}
        onClick={() => setDialogOpen(false)}
      >
        <CloseIcon color="secondary" />
      </IconButton>
      <DialogContentContainer>
        <DialogTitle>
          Escolha o meio para realizar o pedido
        </DialogTitle>
        <Grid container rowSpacing={2}>
          <CardGrid item xs={12} md={6}>
            <CardShape
              icon={<img src={Images.CardIcon4} alt="icon opt 0" height={64} width="auto" />}
              title={{ text: 'Farmácias App', weight: 700, size: 18 }}
              subtitle={{ text: 'Acesse e compre online e receba direto na sua casa', weight: 400, size: 15 }}
              onClick={() => window.open('https://www.farmaciasapp.com.br/rede-brasil-asa-sul')}
            />
          </CardGrid>
          <CardGrid item xs={12} md={6}>
            <CardShape
              icon={<img src={Images.CardIcon5} alt="icon opt 1" height={64} width="auto" />}
              title={{ text: 'WhatsApp', weight: 700, size: 18 }}
              subtitle={{ text: 'Fale com a nossa equipe e tire suas dúvidas', weight: 400, size: 15 }}
              onClick={() => buyRef.current?.openDialog()}
            />
          </CardGrid>
        </Grid>
      </DialogContentContainer>
    </Dialog>
  );
});

export default MarketplaceDialog;
