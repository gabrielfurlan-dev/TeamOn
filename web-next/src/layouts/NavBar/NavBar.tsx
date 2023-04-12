import React, { ReactNode } from 'react';
import Link from 'next/link';
import { House, Confetti, Target, ChartBar, Gear } from 'phosphor-react';
import Logo from "@/assets/Logo_TeamOn"

type NavBarProps = {
    children?: ReactNode;
}

export const NavBar = ({ children }: NavBarProps) => {

    return (
        <>
            <div className='
                    h-screen w-20
                    bg-white dark:bg-black
                    dark:text-DARK_THEME_TEXT
                    flex flex-col justify-between
                    shadow-lg items-center py-9' >
                <div>
                    <Logo height={32} width={32} />
                </div>
                <ul >
                    <li className='m-8'>
                        <Link href='/home'>
                            <House size={32} />
                        </Link>
                    </li>

                    <li className='m-8'>
                        <Link href='/'>
                            <Confetti size={32} />
                        </Link>
                    </li>
                    <li className='m-8'>
                        <Link href='/'>
                            <Target size={32} />
                        </Link>
                    </li>
                    <li className='m-8'>
                        <Link href='/'>
                            <ChartBar size={32} />
                        </Link>
                    </li>
                </ul>
                <div>
                    <button>
                        <Gear size={32} />
                    </button>
                </div>
            </div>
            {children}
        </>
    );
};
