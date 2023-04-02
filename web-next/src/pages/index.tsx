import { useEffect, useState } from "react";
import { HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

export default function Index() {
    return (
        <>
        </>
    )
}

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
