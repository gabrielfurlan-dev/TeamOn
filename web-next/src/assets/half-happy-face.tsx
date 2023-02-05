import React from 'react';
import { EHumorStatus } from '../enums/EHumorStatus';
import { FacesProps } from '../Interfaces/FaceProps';

const HalfHappyFace: React.FC<FacesProps> = ({ width, height, humor }) => {
    return (
        <svg
            width={width || 36}
            height={height || 36}
            viewBox="0 0 36 36"
            fill={humor == EHumorStatus.HalfHappy ? "#FFCC4D" : "none"}
            xmlns="http://www.w3.org/2000/svg">

            <path
                d="M14.8898 13.2H11.6898M24.4898 13.2H21.2898M25.2898 22C25.2898 22 22.8898 25.2 18.0898 25.2C13.2898 25.2 10.8898 22 10.8898 22M2.08984 18C2.08984 26.8368 9.25304 34 18.0898 34C26.9266 34 34.0898 26.8368 34.0898 18C34.0898 9.1632 26.9266 2 18.0898 2C9.25304 2 2.08984 9.1632 2.08984 18Z"
                stroke="#646464"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

        </svg>
    );
}

export default HalfHappyFace;
