import { TopBarButtons } from "@/components/TopBarButtons/TopBarButtons";
import { NavBar } from "@/layouts/NavBar/NavBar";
import { TopBar } from "@/layouts/TopBar/TopBar";
import { CaretLeft } from "phosphor-react";
import { useRouter } from "next/router";

export default function Bazar() {
    const router = useRouter();

    return (
        <NavBar>
            <div className="h-screen w-screen flex flex-col bg-LIGHT_THEME_BACKGROUND_SECONDARY dark:bg-DARK_THEME_BACKGROUND ">
                <div className="flex flex-col h-fit">
                    <div>
                        <TopBar hidden={true} />
                    </div>
                </div>
                <div className="flex flex-col h-full w-full">
                    <div className="bg-LIGHT_THEME_BACKGROUND dark:bg-DARK_THEME_BACKGROUND_SECONDARY mt-8 h-[80vh] scroll-auto ml-4 mr-4 mb-4 overflow-auto rounded-xl shadow-xl">
                        <div className="m-8 flex flex-row items-center dark:text-white">
                            <button onClick={() => router.back()}>
                                <CaretLeft size={40}/>
                            </button>
                            <h1 className="text-4xl ml-4">Bazar</h1>
                        </div>
                    </div>
                </div>
            </div>
        </NavBar>
    );
}
