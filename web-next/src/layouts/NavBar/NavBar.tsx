import React from 'react';
import Link from 'next/link';
import { House, Confetti, Target, ChartBar, Gear } from 'phosphor-react';
import Logo from "@/assets/Logo_TeamOn"

export const NavBar = () => {
    return (
        <div className='h-screen w-20 bg-white flex flex-col justify-between shadow-lg items-center py-9' >
                <div>
                    <Logo height={32} width={32} />
                </div>
            <ul >
                <li className='m-8'>
                    <a href='/'>
                        <House size={32}/>
                    </a>
                </li>
                <li className='m-8'>
                    <a href='/'>
                        <Confetti size={32}/>
                    </a>
                </li>
                <li className='m-8'>
                    <a href='/'>
                        <Target size={32}/>
                    </a>
                </li>
                <li className='m-8'>
                    <a href='/'>
                        <ChartBar size={32}/>
                    </a>
                </li>
            </ul>
            <div>
                <button>
                    <Gear size={32}/>
                </button>
            </div>
        </div>
    );
};
