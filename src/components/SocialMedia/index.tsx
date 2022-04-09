import { forwardRef } from 'react';
import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import {
  SocialMediaContainer,
} from './styles';

import { Images } from '../../constants';

const SocialMedia = forwardRef((_, ref) => {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('lg'));

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ display: 'flex', bgcolor: 'blue' }}
    >
      <SocialMediaContainer>
        <Grid container spacing={4}>
          {matches && (
            <>
              <Grid item xs={6}>
                <img src={Images.SocialMedia} height={624} width="auto" alt="about us cover" />
              </Grid>
              <Grid item xs={6}>
                <img src={Images.SocialMedia} height={624} width="auto" alt="about us cover" />
              </Grid>
            </>
          )}
        </Grid>
        <Grid container spacing={4}>
          {matches && (
            <Grid item xs={6}>
              <img src={Images.SocialMedia} height={624} width="auto" alt="about us cover" />
            </Grid>
          )}
        </Grid>
      </SocialMediaContainer>
    </Box>
  );
});

export default SocialMedia;
