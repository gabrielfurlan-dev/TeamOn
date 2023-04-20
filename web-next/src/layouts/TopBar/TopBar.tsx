import { ProfileButton } from "@/components/Buttons/ProfileButton";
import ToggleButton from "@/components/Buttons/ToggleButton";
import { Card } from "@/components/Cards/Card";
import { TopBarButtons } from "@/components/TopBarButtons/TopBarButtons";
import {
    Bell,
    Calendar,
    Info,
    Megaphone,
    Rocket,
    Storefront,
    UserCircle,
    Users,
} from "phosphor-react";
import React from "react";

type props = {
    hidden?: boolean;
};

export function TopBar({ hidden }: props) {
    return (
        <div
            className="flex flex-col h-full bg-LIGHT_THEME_BACKGROUND dark:bg-DARK_THEME_BACKGROUND_SECONDARY
        mt-4 mr-4 ml-4 rounded-xl"
        >
            <div className="flex flex-row-reverse mx-4 mt-4 gap-3">
                <ProfileButton />
                <button className="dark:text-white">
                    <Bell size={32} />
                </button>
                <ToggleButton />
            </div>

            <div
                className={`m-4 grid lg:grid-cols-5 grid-row-1 gap-3 h-full ${
                    hidden ? "hidden" : null
                }`}
            >
                <Card
                    className={
                        "bg-DARK_BLUE dark:bg-DARK_THEME_BACKGROUND text-WHITE hover:text-LIGHT_GRAY dark:text-DARK_BLUE dark:hover:bg-DARK_BLUE dark:hover:brightness-100 dark:hover:text-white hover:scale-95"
                    }
                    title={"Colaboradores"}
                    icon={Users}
                    url=""
                />
                <Card
                    className="bg-GREEN dark:bg-DARK_THEME_BACKGROUND text-WHITE hover:text-LIGHT_GRAY dark:text-GREEN dark:hover:bg-GREEN dark:hover:brightness-100 dark:hover:text-white hover:scale-95"
                    title={"Bazar"}
                    icon={Storefront}
                    url=""
                />
                <Card
                    className="bg-DARK_YELLOW dark:bg-DARK_THEME_BACKGROUND text-WHITE hover:text-LIGHT_GRAY dark:text-DARK_YELLOW dark:hover:bg-DARK_YELLOW dark:hover:brightness-100 dark:hover:text-white hover:scale-95"
                    title={"Comunicados"}
                    icon={Megaphone}
                    url=""
                />
                <Card
                    className="bg-RED dark:bg-DARK_THEME_BACKGROUND text-WHITE hover:text-LIGHT_GRAY dark:text-RED dark:hover:bg-RED dark:hover:brightness-100 dark:hover:text-white hover:scale-95"
                    title={"Agenda"}
                    icon={Calendar}
                    url=""
                />
                <Card
                    className="bg-LIGHT_BLUE dark:bg-DARK_THEME_BACKGROUND text-WHITE hover:text-LIGHT_GRAY dark:text-LIGHT_BLUE dark:hover:bg-LIGHT_BLUE dark:hover:brightness-100 dark:hover:text-white hover:scale-95"
                    title={"PDI"}
                    icon={Rocket}
                    url=""
                />
            </div>
        </div>
    );
}
