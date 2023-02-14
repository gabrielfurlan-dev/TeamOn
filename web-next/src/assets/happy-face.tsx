import React from 'react';
import { EHumourStatus } from '../enums/EHumourStatus';
import { FacesProps } from '../Interfaces/FaceProps';

const HappyFace: React.FC<FacesProps> = ({ width, height, humour: humour }) => {
    return (
        <svg
            width={width || 36}
            height={height || 36}
            viewBox="0 0 36 36"
            fill={humour == EHumourStatus.Happy ? "#FFCC4D" : "none"}
            xmlns="http://www.w3.org/2000/svg">

            <path
                d="M14.8898 13.2H11.6898M24.4898 13.2H21.2898M2.08984 18C2.08984 26.8368 9.25304 34 18.0898 34C26.9266 34 34.0898 26.8368 34.0898 18C34.0898 9.1632 26.9266 2 18.0898 2C9.25304 2 2.08984 9.1632 2.08984 18ZM21.2898 19.6H14.8898V24.4C14.8898 25.4672 15.5298 27.6 18.0898 27.6C20.6498 27.6 21.2898 25.4672 21.2898 24.4V19.6Z" stroke="#646464"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

        </svg>
    );
}

export default HappyFace;
