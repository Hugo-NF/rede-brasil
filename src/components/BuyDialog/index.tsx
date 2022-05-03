import {
  forwardRef, useState, useImperativeHandle, useCallback, useRef, ElementRef,
} from 'react';

import {
  Button,
  Dialog,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from '@mui/material';

import { Close as CloseIcon } from '@mui/icons-material';

import MarketplaceDialog from '../MarketplaceDialog';

import {
  ConfirmBtnText,
  DialogContentContainer,
  DialogTitle,
  MenuOptionText,
} from './styles';

export interface IBuyDialogHandle {
  openDialog: () => void;
  closeDialog: () => void;
  toggleDialog: () => void;
}

const UnitOptions = [
  {
    value: 'asa-sul',
    name: 'Asa Sul',
    whatsappPhone: '5561999511783',
  },
  {
    value: 'samambaia',
    name: 'Samambaia',
    whatsappPhone: '5561985065927',
  },
  {
    value: 'samambaia-superbom',
    name: 'Samambaia Super Bom',
    whatsappPhone: '5561999934009',
  },
];

const UnitPhones: Record<string, string> = {
  'asa-sul': '5561999511783',
  samambaia: '5561985065927',
  'samambaia-superbom': '5561999934009',
};

const BuyDialog = forwardRef<IBuyDialogHandle, object>((_, ref) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedUnit, setSelectedUnit] = useState<string>('');
  const marketplaceRef = useRef<ElementRef<typeof MarketplaceDialog>>(null);

  useImperativeHandle(ref, () => ({
    openDialog: () => setDialogOpen(true),
    closeDialog: () => setDialogOpen(false),
    toggleDialog: () => setDialogOpen(!dialogOpen),
  }));

  const handleSelection = useCallback(() => {
    setError(false);
    if (selectedUnit === '') {
      setError(true);
    } else {
      window.open(`https://api.whatsapp.com/send?phone=${UnitPhones[selectedUnit]}`);
      setDialogOpen(false);
    }
  }, [selectedUnit]);

  return (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      maxWidth="md"
      fullWidth
    >
      <MarketplaceDialog ref={marketplaceRef} />
      <IconButton
        autoFocus
        sx={{ display: 'flex', alignSelf: 'flex-end' }}
        onClick={() => setDialogOpen(false)}
      >
        <CloseIcon color="secondary" />
      </IconButton>
      <DialogContentContainer>
        <DialogTitle>
          Selecione uma de nossas unidades
        </DialogTitle>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          columnSpacing={4}
          p={8}
        >
          <Grid item xs={12} md={9}>
            <Select
              id="unit-select"
              fullWidth
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              error={error}
            >
              {UnitOptions.map((unit) => (
                <MenuItem key={unit.value} value={unit.value}>
                  <MenuOptionText>{unit.name}</MenuOptionText>
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleSelection}
            >
              <ConfirmBtnText
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                Confirmar
              </ConfirmBtnText>
            </Button>
          </Grid>
        </Grid>
      </DialogContentContainer>
    </Dialog>
  );
});

export default BuyDialog;
