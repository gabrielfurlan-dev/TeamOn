import {  IconProps } from 'phosphor-react';
import React from 'react';

interface CardProps {
    className?: string,

    title: string,
    url: string,
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export const Card: React.FC<CardProps> = ({ className, title, url, icon: Icon }) => {

    let test = ' rounded-lg flex flex-col-reverse w-full h-full transition-all duration-700'

    function NavegarPara(url: string) {
        sweetAlert('Ops!', 'Função não implementada.\n Aguarde.', 'info');
    }
    return (
        <div className={className + test}>
            <button
            className=' h-full flex flex-col-reverse'
                onClick={() => NavegarPara(url)}>
                <div className='flex flex-row m-4 items-center'>
                    <Icon size={32} className={''} />
                    <p className={`ml-2 font-semibold dark:bg-inherit`}>{title}</p>
                </div>
            </button>
        </div>
    );
}
