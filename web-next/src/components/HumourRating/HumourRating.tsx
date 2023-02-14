import React from 'react';
import { EHumourStatus } from '../../enums/EHumourStatus';
import SadFace from '@/assets/sad-face';
import HalfSadFace from '@/assets/half-sad-face';
import EmotionlessFace from '@/assets/emotionless-face';
import HalfHappyFace from '@/assets/half-happy-face';
import HappyFace from '@/assets/happy-face';

interface HumourRatingProps {
    humourStatus: EHumourStatus,
    setHumourStatus: React.Dispatch<React.SetStateAction<EHumourStatus>>
}

const HumourRating: React.FC<HumourRatingProps> = ({ humourStatus: humourStatus, setHumourStatus: setHumourStatus }) => {

    return (
        <>
            <div className="flex flex-row justify-center gap-4">
                <button onClick={() => setHumourStatus(EHumourStatus.Sad)}>
                    <SadFace humour={humourStatus} />
                </button>

                <button onClick={() => setHumourStatus(EHumourStatus.HalfSad)}>
                    <HalfSadFace humour={humourStatus} />
                </button>

                <button onClick={() => setHumourStatus(EHumourStatus.Emotionless)}>
                    <EmotionlessFace humour={humourStatus} />
                </button>

                <button onClick={() => setHumourStatus(EHumourStatus.HalfHappy)}>
                    <HalfHappyFace humour={humourStatus} />
                </button>

                <button onClick={() => setHumourStatus(EHumourStatus.Happy)}>
                    <HappyFace humour={humourStatus} />
                </button>
            </div>
        </>
    );
}

export default HumourRating;
