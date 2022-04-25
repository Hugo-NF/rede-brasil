import { forwardRef, useCallback } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import { useFormik } from 'formik';

import {
  ContactUsContainer,
} from './styles';

interface IContactUsForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactUs = forwardRef((_, ref) => {
  const { palette } = useTheme();

  const handleSubmit = useCallback((values: IContactUsForm) => {
    console.log(values);
  }, []);

  const formik = useFormik<IContactUsForm>({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ display: 'flex', bgcolor: palette.primary.dark }}
    >
      <ContactUsContainer>
        <Typography variant="h2">Medicamentos de Alto Custo</Typography>
        <Typography variant="body1">Deseja fazer o orçamento de algum Medicamento de Alto Custo?</Typography>
        <Typography variant="body1">Este é o lugar certo.</Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            {/* Name and phone row */}
            <Grid container columnSpacing={20} my={5}>
              <Grid item xs={6}>
                <TextField
                  id="name"
                  label="Nome"
                  type="name"
                  variant="standard"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  label="Telefone"
                  type="tel"
                  variant="standard"
                  color="secondary"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </Grid>
            </Grid>
            {/* E-mail row */}
            <Grid container>
              <Grid item xs>
                <TextField
                  id="email"
                  label="E-mail"
                  type="email"
                  variant="standard"
                  color="secondary"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Grid>
            </Grid>
            {/* Message row */}
            <Grid container my={5}>
              <Grid item xs>
                <TextField
                  id="message"
                  label="Mensagem"
                  type="message"
                  fullWidth
                  multiline
                  rows={5}
                  variant="standard"
                  color="secondary"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
              </Grid>
            </Grid>
            {/* Submit Button row */}
            <Grid container>
              <Grid item xs>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </ContactUsContainer>
    </Box>
  );
});

export default ContactUs;
