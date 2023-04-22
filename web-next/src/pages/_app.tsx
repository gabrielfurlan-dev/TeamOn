import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {SessionContextProvider, useSupabaseClient} from "@supabase/auth-helpers-react";
import { DarkThemeProvider } from "@/context/ThemeContext";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <div className="flex col h-screen">
                <ThemeProvider theme={theme}>
                    <DarkThemeProvider>
                        <Component {...pageProps} />
                    </DarkThemeProvider>
                    <GlobalStyle />
                </ThemeProvider>
            </div>
        </SessionContextProvider>
    );
};

export default App;
