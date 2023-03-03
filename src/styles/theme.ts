import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ff6f01',
            contrastText: '#fff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '0.4vw 1.2vw',
                    borderRadius: '0.3vw',
                    fontSize: '1.2vw',
                    '@media(max-width: 992px)': {
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '14px',
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: '1.2vw',
                    '@media(max-width: 992px)': {
                        fontSize: '14px',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '0.3vw',
                    '@media(max-width: 992px)': {
                        borderRadius: '4px',
                    },
                },
                input: {
                    padding: '1.1vw',
                    fontSize: '1.2vw',
                    '@media(max-width: 992px)': {
                        padding: '16px 14px',
                        fontSize: '14px',
                    },
                },
            },
        },
    },
})