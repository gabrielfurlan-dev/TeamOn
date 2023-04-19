import { TopBarButtons } from "@/components/TopBarButtons/TopBarButtons";
import { NavBar } from "@/layouts/NavBar/NavBar";
import { TopBar } from "@/layouts/TopBar/TopBar";

export default function Bazar() {
    return (
        <NavBar>
            <div className="h-screen w-screen flex flex-col">
                <div
                    className="flex flex-col h-full bg-LIGHT_THEME_BACKGROUND_SECONDARY dark:bg-DARK_THEME_BACKGROUND
                            dark:text-DARK_THEME_TEXT"
                >
                    <div>
                        <TopBar hidden={true} />
                    </div>
                </div>

                <div
                    className="bg-LIGHT_THEME_BACKGROUND_SECONDARY dark:bg-DARK_THEME_BACKGROUND
                            dark:text-DARK_THEME_TEXT h-full w-full"
                >
                    <p>OLá mundo</p>
                </div>
            </div>
        </NavBar>
    );
}
