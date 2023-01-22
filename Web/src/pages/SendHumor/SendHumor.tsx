import PrincipalButton from "../../components/Buttons/PrincipalButton/PrincipalButton"
import CheckBox from "../../components/CheckBox/CheckBox";

import { EHumorStatus } from "../../enums/EHumorStatus";
import { useState } from "react";
import HumorRating from "../../components/HumorRating/HumorRating";

function SendHumor() {
    const [humorStatus, setHumorStatus] = useState(EHumorStatus.Emotionless)
    const [comment, setComment] = useState(String)
    const [SendComment, setSendComment] = useState(Boolean)
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

                <CheckBox
                    title={"Enviar Comentário"}
                    checked={SendComment}
                    setChecked={setSendComment}
                />
            </div>
            
            <textarea className="bg-LIGHT_GRAY" hidden={SendComment} />

        </div>
    )
}

export default SendHumor