import { ReactNode } from "react";
import { NavBar } from "../NavBar/NavBar";
import { TopBar } from "../TopBar";

type defaultScreenProps = {
    children?: ReactNode,
    hideCards?: boolean
}

export function DefaultScreen({ children, hideCards }: defaultScreenProps) {
    return (
        <NavBar>
            <div className='bg-LIGHT_THEME_BACKGROUND_SECONDARY dark:bg-DARK_THEME_BACKGROUND
                    dark:text-DARK_THEME_TEXT
                     h-screen w-screen'>

                <div className='bg-LIGHT_THEME_BACKGROUND dark:bg-DARK_THEME_BACKGROUND_SECONDARY
                        mt-4 mr-4 ml-4 rounded-xl'>
                    <TopBar hideCars={hideCards} />
                </div>
                <div className="flex flex-col bg-LIGHT_THEME_BACKGROUND dark:bg-DARK_THEME_BACKGROUND_SECONDARY
                                     m-4 rounded-xl"
                >
                    {children}
                </div>
            </div>
        </NavBar>
    );
}