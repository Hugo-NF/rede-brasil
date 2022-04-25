import { forwardRef, useCallback } from 'react';
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import * as Yup from 'yup';
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
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Nome não pode estar em branco'),
      phone: Yup.string()
        .required('Telefone não pode estar em branco'),
      email: Yup.string()
        .email('Deve formar um e-mail válido').required('E-mail não pode estar em branco'),
      message: Yup.string()
        // eslint-disable-next-line no-template-curly-in-string
        .min(10, 'Mensagem deve conter pelo menos ${min} caracteres')
        .required('Mensagem não pode estar em branco'),
    }),
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
                  variant="standard"
                  color="secondary"
                  InputLabelProps={{ sx: { color: 'white' } }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {Boolean(formik.errors.name) && (
                  <FormHelperText id="name-error-text" sx={{ color: 'white' }}>{formik.errors.name}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  label="Telefone"
                  type="tel"
                  variant="standard"
                  color="secondary"
                  InputLabelProps={{ sx: { color: 'white' } }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {Boolean(formik.errors.phone) && (
                  <FormHelperText id="name-error-text" sx={{ color: 'white' }}>{formik.errors.phone}</FormHelperText>
                )}
              </Grid>
            </Grid>
            {/* E-mail row */}
            <Grid container>
              <Grid item xs>
                <TextField
                  id="email"
                  label="E-mail"
                  variant="standard"
                  color="secondary"
                  fullWidth
                  InputLabelProps={{ sx: { color: 'white' } }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {Boolean(formik.errors.email) && (
                  <FormHelperText id="name-error-text" sx={{ color: 'white' }}>{formik.errors.email}</FormHelperText>
                )}
              </Grid>
            </Grid>
            {/* Message row */}
            <Grid container my={5}>
              <Grid item xs>
                <TextField
                  id="message"
                  label="Mensagem"
                  fullWidth
                  multiline
                  rows={5}
                  variant="standard"
                  color="secondary"
                  InputLabelProps={{ sx: { color: 'white' } }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                {Boolean(formik.errors.message) && (
                  <FormHelperText id="name-error-text" sx={{ color: 'white' }}>{formik.errors.message}</FormHelperText>
                )}
              </Grid>
            </Grid>
            {/* Submit Button row */}
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  <Typography>Enviar</Typography>
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
