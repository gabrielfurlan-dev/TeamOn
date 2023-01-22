import PrincipalButton from "../../components/Buttons/PrincipalButton/PrincipalButton"
import CheckBox from "../../components/CheckBox/CheckBox";

import EmotionlessFace from "../../assets/images/icons/humorFaces/EmotionlessFace";
import HalfHappyFace from "../../assets/images/icons/humorFaces/HalfHappyFace";
import HalfSadFace from "../../assets/images/icons/humorFaces/HalfSadFace";
import HappyFace from "../../assets/images/icons/humorFaces/HappyFace";
import SadFace from "../../assets/images/icons/humorFaces/SadFace";
import { EHumorStatus } from "../../enums/EHumorStatus";
import { useState } from "react";
import HumorRating from "../../components/HumorRating/HumorRating";

function SendHumor() {
    const [humorStatus, setHumorStatus] = useState(EHumorStatus.Emotionless)

    return (
        <div>
            <h1 className="text-DARK_GRAY font-normal text-3xl">
                Humor
            </h1>

            <HumorRating
                humorStatus={humorStatus}
                setHumorStatus={setHumorStatus}
            />

            <div>
                <PrincipalButton title="Enviar" />
                <div>
                    <CheckBox title={"Enviar Comentário"} />
                </div>
            </div>
        </div>
    )
}

export default SendHumor