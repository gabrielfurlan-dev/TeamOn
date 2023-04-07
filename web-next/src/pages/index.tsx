import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Session } from "@supabase/auth-helpers-nextjs";

const Home: React.FC = () => {
    // Retrieve provider_token & logged in user's third-party id from metadata
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const supabase = useSupabaseClient();
    const router = useRouter();

    function saveUsersData(session: Session) {
        const data = session?.user;
        localStorage.setItem("Name:", data.user_metadata.name);
        localStorage.setItem("Email:", String(data.email));
        localStorage.setItem("Photo:", data.user_metadata.avatar_url);
    }

    useEffect(() => {
        async function fetchData() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.push("/login");
                return;
            }
            saveUsersData(session);
            router.push("/home");
        }
        fetchData();
    }, []);

    return (
        <div>
            <Head>
                <title>TeamOn</title>
            </Head>

            <main>
                <h1>index</h1>
            </main>
        </div>
    );
};

export default Home;
