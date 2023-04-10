//* Libraries imports
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

//* Types imports
import type { AppProps } from "next/app";

//* Local imports
import theme from "@/styles/theme";
import GlobalStyle from "../styles/globals";

export default function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            {/* criminoso, não use divs no _app.tsx */}
            <div className="flex col">
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                    <GlobalStyle />
                </ThemeProvider>
            </div>
        </SessionContextProvider>
    );
};