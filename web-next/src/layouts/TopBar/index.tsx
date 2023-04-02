import ToggleButton from '@/components/Buttons/ToggleButton';
import { Card } from '@/components/Cards/Card';
import { Bell, Calendar, Info, Megaphone, Rocket, Storefront, ToggleLeft, UserCircle, UserSwitch, Users } from 'phosphor-react';
import React, { useState } from 'react';

export function TopBar() {
    const [darkTheme, setDarkTheme]=useState(false)

    return (
        <div className='flex flex-col h-full'>
            <div className='flex flex-row-reverse mx-4 mt-4 gap-3'>
                <button><UserCircle size={32} /></button>
                <button><Bell size={32} /></button>
                <button><Info size={32} /></button>
                <ToggleButton onToggle={() => setDarkTheme(!darkTheme)} isOn={darkTheme}/>
            </div>

            <div className='m-4 grid lg:grid-cols-5 grid-row-1 gap-3 h-full'>
                <Card color={'bg-DARK_BLUE'} title={'Colaboradores'} icon={Users} url='' />
                <Card color={'bg-GREEN'} title={'Colaboradores'} icon={Storefront} url='' />
                <Card color={'bg-DARK_YELLOW'} title={'Colaboradores'} icon={Megaphone} url='' />
                <Card color={'bg-LIGHT_BLUE'} title={'Colaboradores'} icon={Rocket} url='' />
                <Card color={'bg-RED'} title={'Colaboradores'} icon={Calendar} url='' />
            </div>
        </div >
    );
}
