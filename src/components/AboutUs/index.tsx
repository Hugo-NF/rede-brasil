import { forwardRef } from 'react';
import {
  Box,
  Button,
  Grid,
} from '@mui/material';

import {
  AboutUsContainer,
  AboutUsGrid,
  AboutUsText,
  Title,
} from './styles';
import { Images } from '../../constants';

const Units = forwardRef((_, ref) => (
  <Box
    ref={ref}
    component="section"
    sx={{ display: 'flex', bgcolor: 'background.main' }}
  >
    <AboutUsContainer>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img src={Images.AboutUsLogo} height={624} width="auto" alt="about us cover" />
        </Grid>
        <AboutUsGrid item xs={6}>
          <Title variant="h4">
            Sobre Nós
          </Title>
          <AboutUsText color="text.secondary" variant="body2">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,
            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for lorem ipsum will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ullamcorper dui.
            Aliquam sollicitudin libero mollis neque ultricies eleifend. Vivamus consequat iaculis auctor.
            Morbi ultrices faucibus tellus, quis luctus sapien blandit sed. Nulla facilisi. Integer.
          </AboutUsText>
          <Button variant="contained" color="secondary">Saiba Mais</Button>
        </AboutUsGrid>
      </Grid>
    </AboutUsContainer>
  </Box>
));

export default Units;
