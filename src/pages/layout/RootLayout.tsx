import type { FC } from 'react';
import { Header } from '.';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

// mui override하기
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';

const rootElement = document.getElementById("root");

const theme = createTheme({
    components: {
        MuiPopover: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiPopper: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiDialog: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiModal: {
          defaultProps: {
            container: rootElement,
          },
        },
      },
});

const RootLayout: FC = () => {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <div className='flex flex-col min-h-[100dvh] bg-black text-white'>
                    <Header />
                    <main className='flex-grow'>
                        <Outlet />
                    </main>               
                </div>
            </ThemeProvider>            
        </StyledEngineProvider>        
    );
};

export default RootLayout;