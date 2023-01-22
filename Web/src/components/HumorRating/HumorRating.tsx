import React, { useState } from 'react';
import EmotionlessFace from '../../assets/images/icons/humorFaces/EmotionlessFace';
import HalfHappyFace from '../../assets/images/icons/humorFaces/HalfHappyFace';
import HalfSadFace from '../../assets/images/icons/humorFaces/HalfSadFace';
import HappyFace from '../../assets/images/icons/humorFaces/HappyFace';
import SadFace from '../../assets/images/icons/humorFaces/SadFace';
import { EHumorStatus } from '../../enums/EHumorStatus';

interface HumorRatingProps{
    humorStatus:EHumorStatus,
    setHumorStatus:React.Dispatch<React.SetStateAction<EHumorStatus>>
}

const HumorRating: React.FC<HumorRatingProps> = ({humorStatus, setHumorStatus}) => {
    
    return (
        <div className="flex">
            <button onClick={() => setHumorStatus(EHumorStatus.Happy)}>
                <HappyFace humor={humorStatus} />
            </button>

            <button onClick={() => setHumorStatus(EHumorStatus.HalfHappy)}>
                <HalfHappyFace humor={humorStatus} />
            </button>

            <button onClick={() => setHumorStatus(EHumorStatus.Emotionless)}>
                <EmotionlessFace humor={humorStatus} />
            </button>

            <button onClick={() => setHumorStatus(EHumorStatus.HalfSad)}>
                <HalfSadFace humor={humorStatus} />
            </button>

            <button onClick={() => setHumorStatus(EHumorStatus.Sad)}>
                <SadFace humor={humorStatus} />
            </button>
        </div>
    );
}

export default HumorRating;