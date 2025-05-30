import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e'
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff'
        },
        text: {
            primary: '#424242',  // Cor principal do texto
            secondary: '#616161', // Cor secundária (um pouco mais clara)
            disabled: '#9e9e9e',  // Cor para texto desabilitado
        }
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
});

lightTheme.typography.h1 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',

    },
    '@media (min-width:900px)': {
        fontSize: '1.5rem',
    },
    '@media (min-width:1200px)': {
        fontSize: '1.6rem',
    },
    [lightTheme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e'
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e'
        },
        text: {
            primary: '#e0e0e0',  // Cinza bem claro (bom contraste com fundo escuro)
            secondary: '#b5b5b5', // Cinza médio-claro
            disabled: '#757575'   // Cinza mais escuro para texto desabilitado
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
})

darkTheme.typography.h1 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    '@media (min-width:900px)': {
        fontSize: '1.5rem',
    },
    '@media (min-width:1200px)': {
        fontSize: '1.6rem',
    },
    [lightTheme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};