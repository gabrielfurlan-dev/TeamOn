import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { NextApiHandler } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

const Home: React.FC = () => {
    // Retrieve provider_token & logged in user's third-party id from metadata
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const supabase = useSupabaseClient();
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.push("/login");
                return;
            }
            const data = session?.user;
            console.log(data);


            localStorage.setItem("Name:", data.user_metadata.name);
            localStorage.setItem("Email:", String(data.email));
            localStorage.setItem("Photo:", data.user_metadata.avatar_url);
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

// export default function MyPage() {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState("");

//   const connection: HubConnection = new HubConnectionBuilder()
//     .withUrl("http://localhost:5184/meu-hub")
//     .withAutomaticReconnect()
//     .build();

//   connection.on("ReceberMensagem", (mensagem: string) => {
//     setMessages((prevMessages) => [...prevMessages, mensagem]);
//   });

//   useEffect(() => {
//     connection
//       .start()
//       .then(() => console.log("Conectado ao hub SignalR"))
//       .catch((error) => console.error("Erro ao conectar:", error));

//     return () => {
//       connection.stop();
//     };
//   }, []);

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setInputValue(event.target.value);
//   }

//   async function handleFormSubmit2(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (!connection || connection.state !== HubConnectionState.Connected) {
//         alert("websocket dosent connected");
//         return;
//     }

//     try {
//       await connection.invoke('EnviarMensagem', inputValue);
//       setInputValue("");
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   return (
//     <div>
//       <ul>
//         {messages.map((message, index) => (
//           <li key={index}>{message}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleFormSubmit2}>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }
