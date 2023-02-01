import React, { useState } from 'react';
import Emotionless from 'C:\\dev\\TeamOn\\web-next\\src\\assets\\emotionless-face.svg';
import HalfHappy from 'C:\\dev\\TeamOn\\web-next\\src\\assets\\emotionless-face.svg';
import HalfSad from 'C:\\dev\\TeamOn\\web-next\\src\\assets\\emotionless-face.svg';
import Happy from 'C:\\dev\\TeamOn\\web-next\\src\\assets\\emotionless-face.svg';
import Sad from 'C:\\dev\\TeamOn\\web-next\\src\\assets\\emotionless-face.svg';
import { EHumorStatus } from '../../enums/EHumorStatus';

interface HumorRatingProps {
    humorStatus: EHumorStatus,
    setHumorStatus: React.Dispatch<React.SetStateAction<EHumorStatus>>
}

const HumorRating: React.FC<HumorRatingProps> = ({ humorStatus, setHumorStatus }) => {

    return (
        <>
            <div className="flex flex-row justify-center gap-4">
                <button onClick={() => setHumorStatus(EHumorStatus.Sad)}>
                    <Sad />
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.HalfSad)}>
                    <HalfSad />
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.Emotionless)}>
                    <Emotionless />
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.HalfHappy)}>
                    <HalfHappy />
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.Happy)}>
                    <Happy />
                </button>
            </div>
        </>
    );
}

export default HumorRating;
