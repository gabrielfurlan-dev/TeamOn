import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
    SessionContextProvider, useSupabaseClient
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";


import { NavBar } from "@/layouts/NavBar/NavBar"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());
    
    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <div className="flex col">
             <NavBar />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
            </div>
        </SessionContextProvider>
    );
};

export default App;
