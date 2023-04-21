import { SetStateAction } from "react";

type inputProps = {
    id?: string,
    value?: string;
    placeHolder?: string,
    type?: ("email" | "password" | undefined),
    width?: number,
    height?: number,
    onChange?: (value: SetStateAction<any>) => void;
}

export function InputText({ id, value, placeHolder, type, width, height, onChange: method }: inputProps) {
    return (
        <>
            <input
                id={id}
                className=" border border-GRAY text-md rounded-lg py-2 px-4 dark:bg-DARK_THEME_BACKGROUND"
                placeholder={placeHolder}
                type={type}
                value={value}
                width={width}
                height={height}
                onChange={method}
            />
        </>
    );
}
