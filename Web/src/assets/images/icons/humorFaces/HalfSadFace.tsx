import React from 'react';
import { EHumorStatus } from '../../../../enums/EHumorStatus';
import { FacesProps } from '../../../../Interfaces/FaceProps';

const HalfSadFace: React.FC<FacesProps> = ({ width, height, humor }) => {
    return (
        <svg
            width={width || 36}
            height={height || 36}
            viewBox="0 0 36 36"
            fill={humor == EHumorStatus.HalfSad ? "#FFCC4D" : "none"}
            xmlns="http://www.w3.org/2000/svg">

            <path
                d="M14.8898 26.5H21.2898M34.0898 18C34.0898 26.8368 26.9266 34 18.0898 34C9.25304 34 2.08984 26.8368 2.08984 18C2.08984 9.1632 9.25304 2 18.0898 2C26.9266 2 34.0898 9.1632 34.0898 18Z"
                stroke="#646464"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />

            <circle cx="12.5898" cy="18.5" r="2.5" fill="#646464" />
            <circle cx="23.5898" cy="18.5" r="2.5" fill="#646464" />

        </svg>
    );
}

export default HalfSadFace;