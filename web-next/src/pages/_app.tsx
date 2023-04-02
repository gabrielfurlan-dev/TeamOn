import React from "react";
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { NavBar } from "@/layouts/NavBar/NavBar"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <div className="flex col">
                <NavBar />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                    <GlobalStyle />
                </ThemeProvider>
            </div>
        </>
    )
}

export default App;
