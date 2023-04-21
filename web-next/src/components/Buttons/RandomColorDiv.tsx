import React, { ReactNode } from 'react';
import classnames from 'classnames';

interface randomColorDivProps {
    className?: string;
    children?: ReactNode;
}

export default function RandomColorDiv({ className,children }: randomColorDivProps) {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const wrapperClasses = classnames(randomColor, className);

    return <div className={wrapperClasses}>{children}</div>;
};

