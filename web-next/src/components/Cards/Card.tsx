import { IconProps } from 'phosphor-react';
import React from 'react';

interface CardProps {
    color: string,
    title: string,
    url: string,
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export const Card: React.FC<CardProps> = ({ color, title, url, icon: Icon }) => {
    let cardClass = `rounded-lg flex flex-col-reverse w-full h-full ${color}`

    function NavegarPara(url: string) {
        // window.location.href=url
        sweetAlert('Ops!', 'O desenvolvedor está jogando CS e ainda não implementou a função. Pedimos que aguarde até que a partida dele acabe. #RumoAoPrata2 👊😎', 'info');
    }

    return (
        <div className=''>
            <button
                className={cardClass}
                onClick={() => NavegarPara(url)}>
                <div className='flex flex-row m-4 items-center'>
                    <Icon size={32} color='white' />
                    <p className='ml-2 font-medium text-white'>{title}</p>
                </div>
            </button>
        </div>
    );
}
