import { forwardRef } from 'react';
import {
  Box,
  Grid,
} from '@mui/material';

import { Images } from '../../constants';

import ImageCard from '../ImageCard';
import {
  Title,
  UnitsContainer,
} from './styles';

const units = [
  {
    src: Images.AsaSulUnit,
    title: 'Asa Sul',
    address: 'CLS 204 BLOCO C LOJA 20 - Asa Sul, 70234-530',
    locationUrl: 'https://www.google.com.br/maps/place/Rede+Brasil+Drugstore/@-15.8101223,-47.8916958,17z/data=!3m1!4b1!4m5!3m4!1s0x935a3b03fe443e2b:0x6b8d8577d610762b!8m2!3d-15.8101275!4d-47.8895071',
    phone: '(61) 99806-2229',
    whatsappPhone: '+5561998062229',
    message: 'Olá, quero comprar um medicamento',
  },
  {
    src: Images.SamambaiaUnit,
    title: 'Samambaia',
    address: 'QN 209 - Samambaia Norte, 72341-451',
    locationUrl: 'https://www.google.com.br/maps/place/Rede+Brasil+Drugstore+QN+209/@-15.8779109,-48.1203309,14z/data=!4m9!1m2!2m1!1srede+brasil!3m5!1s0x935bd2f250f8c427:0x7a58b71d46ac8350!8m2!3d-15.880002!4d-48.1047147!15sCgtyZWRlIGJyYXNpbFoNIgtyZWRlIGJyYXNpbJIBCWRydWdzdG9yZQ',
    phone: '(61) 99806-2229',
    whatsappPhone: '+5561998062229',
    message: 'Olá, quero comprar um medicamento',
  },
  {
    src: Images.SuperbomUnit,
    title: 'Samambaia Super Bom',
    address: 'QS 409 conjunto D lote 3 e 4 loja 02 - Samambaia Sul, 72321-535',
    locationUrl: 'https://www.google.com.br/maps/place/Rede+Brasil+Drugstore+QS+409/@-15.877958,-48.10501,17z/data=!3m1!4b1!4m5!3m4!1s0x935bcdb5ad6ac687:0xa7c5d8a9d720f9eb!8m2!3d-15.8779632!4d-48.1028213',
    phone: '(61) 99806-2229',
    whatsappPhone: '+5561998062229',
    message: 'Olá, quero comprar um medicamento',
  },
];

const Units = forwardRef((_, ref) => (
  <Box
    ref={ref}
    component="section"
    sx={{ display: 'flex', bgcolor: 'background.main' }}
  >
    <UnitsContainer>
      <Title variant="h4">
        Unidades
      </Title>
      <Grid container spacing={4}>
        {units.map((unit) => (
          <Grid key={unit.title} item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <ImageCard
              src={unit.src}
              title={unit.title}
              address={unit.address}
              locationUrl={unit.locationUrl}
              phone={unit.phone}
              whatsappPhone={unit.whatsappPhone}
              message={unit.message}
            />
          </Grid>
        ))}
      </Grid>
    </UnitsContainer>
  </Box>
));

export default Units;
