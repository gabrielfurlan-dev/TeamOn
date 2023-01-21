import React from 'react'

interface ButtonProps {
    title: string;
}

const PrincipalButton: React.FC<ButtonProps> = ({ title }) => {
    return (
        <div>
            <button type="button" className="bg-LIGHT_BLUE p-2 text-WHITE rounded-lg">{title}</button>
        </div>
    )
}

export default PrincipalButton;
