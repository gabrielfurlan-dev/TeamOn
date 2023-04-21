type textAreaProps = {
    id?: string,
    value?: string;
    placeHolder?: string,
}

export function TextArea({ id, value, placeHolder }: textAreaProps) {
    return (
        <textarea
            id={id}
            className="border border-GRAY text-md rounded-lg py-2 px-4 dark:bg-DARK_THEME_BACKGROUND h-48"
            placeholder={placeHolder}
        />
    );
}
