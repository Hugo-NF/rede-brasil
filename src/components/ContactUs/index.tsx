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
  email: string;
  message: string;
}

const whatsappPhone = '5561998062229';

const ContactUs = forwardRef((_, ref) => {
  const { palette } = useTheme();

  const composeMessage = useCallback((values: IContactUsForm) => encodeURI(`Nome: ${values.name}\r\nE-mail: ${values.email}\r\n\r\n${values.message}`), []);

  const handleSubmit = useCallback((values: IContactUsForm) => {
    window.open(`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${composeMessage(values)}`);
  }, []);

  const formik = useFormik<IContactUsForm>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Nome não pode estar em branco'),
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
        <Typography variant="h2" mb={2} textTransform="uppercase">Medicamentos de Alto Custo</Typography>
        <Typography variant="body1" mb={5} textAlign="center">
          Informe o medicamento que necessita e receba o orçamento para
          <br />
          demanda judicial em até 1 hora!
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* Name and email row */}
            <Grid
              container
              spacing={5}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  id="name"
                  label="Nome"
                  variant="standard"
                  color="secondary"
                  placeholder="Maria"
                  fullWidth
                  InputLabelProps={{ sx: { color: 'white' } }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {Boolean(formik.errors.name) && (
                  <FormHelperText id="name-error-text" sx={{ color: 'white' }}>{formik.errors.name}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="email"
                  label="E-mail"
                  variant="standard"
                  color="secondary"
                  placeholder="seuemail@gmail.com"
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
            <Grid container my={4}>
              <Grid item xs={12}>
                <TextField
                  id="message"
                  label="Mensagem"
                  fullWidth
                  multiline
                  rows={5}
                  variant="standard"
                  color="secondary"
                  placeholder="Ex.: Gostaria de um orçamento para..."
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
                  size="large"
                >
                  <Typography textTransform="none">Enviar</Typography>
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
