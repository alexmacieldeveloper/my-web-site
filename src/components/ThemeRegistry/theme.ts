
import { createTheme } from '@mui/material/styles';

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
    fontFamily: 'Arial',
  }
});

export default theme;
