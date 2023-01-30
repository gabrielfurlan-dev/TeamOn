import React from "react";
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
        </>
    )
}

export default App;
