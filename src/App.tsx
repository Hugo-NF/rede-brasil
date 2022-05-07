import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Landing from './views/Landing';
import GlobalStyles from './GlobalStyles';

const Index = () => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <GlobalStyles />
    <Landing />
  </ThemeProvider>

);

export default Index;
