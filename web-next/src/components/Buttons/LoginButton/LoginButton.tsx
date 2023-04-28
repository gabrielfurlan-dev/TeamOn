import { IconProps } from "phosphor-react";
import { MouseEventHandler } from "react";

export interface ButtonProps {
    loginFunction: MouseEventHandler<HTMLButtonElement>;
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

export function LoginButton({ loginFunction, icon: Icon }: ButtonProps) {
    return (
        <button
            onClick={loginFunction}
            className={`flex flex-row
                        text-md
                        rounded-lg
                        py-2 px-2
                        items-center`}
        >
            <Icon size={32} />
        </button>
    );
}
