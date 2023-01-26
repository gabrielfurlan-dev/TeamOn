import PrincipalButton from "../../components/Buttons/PrincipalButton/PrincipalButton"
import CheckBox from "../../components/CheckBox/CheckBox";
import { EHumorStatus } from "../../enums/EHumorStatus";
import { useState } from "react";
import HumorRating from "../../components/HumorRating/HumorRating";

function SendHumor() {
    const [humorStatus, setHumorStatus] = useState(EHumorStatus.Emotionless)
    const [sendComment, setSendComment] = useState(false);

    return (
        <div className=" m-2 flex flex-col items-center ">

            <h1 className="text-DARK_GRAY font-normal text-3xl mb-5">Humor</h1>

            <HumorRating
                humorStatus={humorStatus}
                setHumorStatus={setHumorStatus}
            />

            <div className="flex flex-row m-4 items-center ">
                <div className="mr-4">
                    <CheckBox
                        title={"Enviar Comentário"}
                        checked={sendComment}
                        setChecked={setSendComment}
                    />
                </div>

                <PrincipalButton title="Enviar"/>

            </div>

            {sendComment && (
                <textarea
                    className="bg-LIGHT_GRAY mt-2 p-2 max-w-md"
                    cols={40} rows={5} placeholder="Informe aqui seu comentário..." />
            )}

        </div>
    )
}

export default SendHumor