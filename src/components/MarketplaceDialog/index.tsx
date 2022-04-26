import {
  forwardRef, useState, useImperativeHandle, useCallback,
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

import {
  ConfirmBtnText,
  DialogContentContainer,
  DialogTitle,
  MenuOptionText,
} from './styles';

export interface IMarketplaceDialogHandle {
  openDialog: () => void;
  closeDialog: () => void;
  toggleDialog: () => void;
}

const UnitOptions = [
  {
    value: 'samambaia',
    name: 'Samambaia',
    whatsappPhone: '+5561998062229',
  },
  {
    value: 'samambaia-superbom',
    name: 'Samambaia Super Bom',
    whatsappPhone: '+5561998062229',
  },
  {
    value: 'asa-sul',
    name: 'Asa Sul',
    whatsappPhone: '+5561998062229',
  },
  {
    value: 'marketplace',
    name: 'Marketplace',
    whatsappPhone: '+5561998062229',
  },
];

const UnitPhones: Record<string, string> = {
  samambaia: '+5561998062229',
  'samambaia-superbom': '+5561998062229',
  'asa-sul': '+5561998062229',
  marketplace: '+5561998062229',
};

const MarketplaceDialog = forwardRef<IMarketplaceDialogHandle, object>((_, ref) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedUnit, setSelectedUnit] = useState<string>('');

  useImperativeHandle(ref, () => ({
    openDialog: () => setDialogOpen(true),
    closeDialog: () => setDialogOpen(false),
    toggleDialog: () => setDialogOpen(!dialogOpen),
  }));

  const handleSelection = useCallback(() => {
    setError(false);
    if (selectedUnit === '') {
      setError(true);
    } else if (selectedUnit === 'marketplace') {
      console.log('marketplace');
    } else {
      window.open(`https://api.whatsapp.com/send?phone=${UnitPhones[selectedUnit]}`);
    }
  }, [selectedUnit]);

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
              <MenuItem key="" value="">
                <MenuOptionText fontStyle="italic">Selecione</MenuOptionText>
              </MenuItem>
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

export default MarketplaceDialog;
