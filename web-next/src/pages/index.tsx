import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Session } from "@supabase/auth-helpers-nextjs";
import api from "@/lib/axios";
import { IUser } from "@/Interfaces/User";

export default function Index() {
    const supabase = useSupabaseClient();
    const router = useRouter();

    async function saveUsersData(session: Session) {
        const data = session?.user;
        console.log(data.email);

        let user = await api.get<IUser>('user/get-by-email', {
            data: {
                userEmail: data.email,
                companyId: "string"
            }
        })
        console.log(user);

        // if (user == null) {
        //     await api.post("user/create", {
        //         name: data.user_metadata.name,
        //         occupation: "",
        //         biography: "",
        //         email: String(data.email),
        //         skills: []
        //     })

        //     user = await api.get<IUser>('user/get-by-email', {
        //         data: {
        //             companyId: "string",
        //             userEmail: data.email
        //         }
        //     })
        // }

        // localStorage.setItem("name", user.data.name);
        // localStorage.setItem("biography", user.data.biography);
        // localStorage.setItem("email", user.data.email);
        // localStorage.setItem("occupation", user.data.occupation);
        // localStorage.setItem("skills", JSON.stringify(user.data.skills));
        // localStorage.setItem("photo", data.user_metadata.avatar_url);
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
