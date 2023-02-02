import React from 'react';
import { EHumorStatus } from '../../enums/EHumorStatus';
import SadFace from '@/assets/sad-face';
import HalfSadFace from '@/assets/half-sad-face';
import EmotionlessFace from '@/assets/emotionless-face';
import HalfHappyFace from '@/assets/half-happy-face';
import HappyFace from '@/assets/happy-face';

interface HumorRatingProps {
    humorStatus: EHumorStatus,
    setHumorStatus: React.Dispatch<React.SetStateAction<EHumorStatus>>
}

const HumorRating: React.FC<HumorRatingProps> = ({ humorStatus, setHumorStatus }) => {

    return (
        <>
            <div className="flex flex-row justify-center gap-4">
                <button onClick={() => setHumorStatus(EHumorStatus.Sad)}>
                    <SadFace humor={humorStatus}/>
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.HalfSad)}>
                    <HalfSadFace humor={humorStatus} />
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.Emotionless)}>
                    <EmotionlessFace humor={humorStatus} />
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.HalfHappy)}>
                    <HalfHappyFace humor={humorStatus} />
                </button>

                <button onClick={() => setHumorStatus(EHumorStatus.Happy)}>
                    <HappyFace humor={humorStatus} />
                </button>
            </div>
        </>
    );
}

export default HumorRating;
