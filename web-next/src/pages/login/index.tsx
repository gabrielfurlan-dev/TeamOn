import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import {
    GoogleLogo,
    FacebookLogo,
    GithubLogo,
    DiscordLogo,
} from "phosphor-react";

import { LoginButton } from "@/components/Buttons/LoginButton/LoginButton";
import Logo from "@/assets/Logo_TeamOn";

import { useState } from "react";
import { InputText } from "@/components/Buttons/InputText";

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
        <div className="w-full h-screen flex flex-col">

            <div className="mt-12 ml-12 flex sm:flex-row flex-col items-center">
                <div className="mr-4">
                    <Logo width={32} height={32} />
                </div>
                <div>
                    <h1 className=" font-normal leading-7 text-4xl mt-8">
                        <span className="font-bold">Team</span>on
                    </h1>
                    <p className="leading-6 text-lg">
                        A plataforma para companhias
                    </p>
                </div>
            </div>

            <div className=" h-full flex flex-col justify-center dark:bg-DARK_THEME_BACKGROUND">

                <div className="flex flex-col items-center w-full">
                    <div className=" flex flex-col w-full max-w-screen-sm">

                        <h1 className="font-bold text-3xl text-LIGHT_THEME_TITLE dark:text-DARK_THEME_TITLE text-center">
                            Entre
                        </h1>

                        <div className="flex flex-col mt-4 w-full items-center focus:border-0">
                            <div className="w-2/3 items-center flex flex-col gap-4">

                                <InputText
                                    placeHolder="email@example.com.br"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <InputText
                                    placeHolder="**********"
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />

                                <button
                                    className="bg-GREEN border text-white text-md rounded-lg w-full py-2 px-4"
                                    onClick={() => signInWithEmail()}
                                > Continuar com email </button>
                            </div>
                        </div>

                        <p className="pt-10 leading-6 text-center">Or</p>

                        <div className="flex justify-center">
                            <LoginButton loginFunction={signInWithGoogle} icon={GoogleLogo} />
                            <LoginButton loginFunction={signInWithFacebook} icon={FacebookLogo} />
                            <LoginButton loginFunction={signInWithDiscord} icon={DiscordLogo} />
                            <LoginButton loginFunction={signInWithGitHub} icon={GithubLogo} />
                        </div>

                        <div className="flex justify-center mt-4 m-20 text-center">
                            <label
                                htmlFor="link-checkbox"
                                className="ml-2 text-md font-medium text-gray-900"
                            >
                                Ao continuar você aceita todos os nossos{" "}
                                <a href="#" className="text-blue-600 underline dark:text-blue-500 hover:underline">
                                    termos e condições
                                </a>
                                .
                            </label>
                        </div>

                    </div>
                </div>

            </div>

            <footer className="w-full flex items-end justify-center mb-6">
                <p>
                    Email para contato:{" "}
                    <strong>contact@teamon.com</strong>
                </p>
            </footer>
        </div>
    );
}
