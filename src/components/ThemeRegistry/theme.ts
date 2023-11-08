import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary :{
        main: '#235558',
        light: '#e7e7e7',
        dark: '#0E0E0E'
    },
    background: {
      default: '#0E0E0E'
    },
  },  
  typography: {
    fontFamily: 'Roboto',
  }
});

export default theme;
