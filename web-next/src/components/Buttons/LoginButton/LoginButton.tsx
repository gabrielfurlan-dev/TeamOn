import { MouseEventHandler } from "react";

export  interface ButtonProps {
    title: string;
    metodo: MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    margin?: string;
}

export function LoginButton(props: ButtonProps) {
    return (
        <button
            onClick={props.metodo}
            className={`flex flex-row border text-md rounded-3xl w-2/3 py-2 px-2 items-center border-PRINCIPAL_GREEN mt-${props.margin}`}
        >
           {props.children}
           {props.title}
        </button>
    );
}
