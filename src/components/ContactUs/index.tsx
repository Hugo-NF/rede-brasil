import { forwardRef, useCallback } from 'react';
import {
  Box,
  TextField,
  // Grid,
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
          <TextField
            id="email"
            label="E-mail"
            type="email"
            variant="standard"
            color="secondary"
            onChange={formik.handleChange}
            value={formik.values.email}
            sx={{ backgroundColor: 'transparent' }}
          />
          <button type="submit">Submit</button>
        </form>
      </ContactUsContainer>
    </Box>
  );
});

export default ContactUs;
