import { useRouter } from "next/router";
import Image from "next/image";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import imageLogin from "@/assets/images/login-screen-image.png";
import {
    GoogleLogo,
    FacebookLogo,
    GithubLogo,
    DiscordLogo,
} from "phosphor-react";
import { LoginButton } from "@/components/Buttons/LoginButton/LoginButton";
import Logo from "@/assets/Logo_TeamOn";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const supabase = useSupabaseClient();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
      }

    async function signInWithGitHub() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });
    }
    async function signInWithDiscord() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "discord",
        });
    }

    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });
        console.log(data);
    }

    async function signInWithFacebook() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "facebook",
        });
        console.log(data);
    }

    return (
        <div className="flex flex-row w-screen h-screen justify-center max-h-[1280px]">
            <div className="w-5/12 h-10/12">
                <div className="flex flex-col h-full w-full items-center">
                    <div className=" mt-4 flex items-start w-2/3 flex-col">
                        {/* <div className="mt">
                        <Logo width={30} height={30} />
                        </div> */}

                        <h1 className=" font-normal leading-7 text-4xl mt-8">
                            Bem-vindo
                        </h1>
                        <h2 className="text-3xl mt-6">
                            <span className="font-bold">Team</span>on,
                        </h2>
                        <p className="leading-6 text-lg">
                            A plataforma para companhias
                        </p>
                    </div>

                    <h1 className="font-bold text-lg text-BLACK mt-6">
                        Entre para continuar
                    </h1>

                    <div className="flex flex-col mt-4 w-full items-center focus:border-0">
                        <input
                            className=" border border-GRAY text-md rounded-3xl w-2/3 py-2 px-4"
                            placeholder="email@example.com.br"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className=" mt-5 border border-GRAY text-md rounded-3xl w-2/3 py-2 px-4"
                            placeholder="**********"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <p className="mt-4 mb-4 leading-6">Or</p>

                    <LoginButton
                        title="Entrar com Google"
                        metodo={signInWithGoogle}
                    >
                        <GoogleLogo size={32} className="mr-8" />
                    </LoginButton>

                    <LoginButton
                        title="Entrar com Discord"
                        metodo={signInWithDiscord}
                        margin={"5"}
                    >
                        <DiscordLogo size={32} className="mr-8" />
                    </LoginButton>

                    <LoginButton
                        title="Entrar com Facebook"
                        metodo={signInWithFacebook}
                        margin={"5"}
                    >
                        <FacebookLogo size={32} className="mr-8" />
                    </LoginButton>

                    <LoginButton
                        title="Entrar com GitHub"
                        metodo={signInWithGitHub}
                        margin={"5"}
                    >
                        <GithubLogo size={32} className="mr-8" />
                    </LoginButton>

                    <div className="flex items-center mt-4">
                        <input
                            id="link-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="link-checkbox"
                            className="ml-2 text-md font-medium text-gray-900"
                        >
                            I agree with the{" "}
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                terms and conditions
                            </a>
                            .
                        </label>
                    </div>

                    <footer className="w-full h-full flex items-end justify-center mb-6">
                        <p>
                            Email para contato:{" "}
                            <strong>contact@teamon.com</strong>
                        </p>
                    </footer>
                </div>
            </div>
            <div className="w-11/12 h-11/12 p-2 flex flex-col items-end justify-center">
                <Image
                    src={imageLogin}
                    className="w-11/12 h-full ml-16"
                    alt="Imagem de login"
                    quality={100}
                />
            </div>
        </div>
    );
}
