import PrincipalButton from "../../components/Buttons/PrincipalButton/PrincipalButton"
import CheckBox from "../../components/CheckBox/CheckBox";
import { EHumorStatus } from "../../enums/EHumorStatus";
import { useEffect, useState } from "react";
import HumorRating from "../../components/HumorRating/HumorRating";
import api from '../../lib/axios'

function SendHumor(){
    // api.post('/humors')
}

function SendHumorComponent() {
    const [humorStatus, setHumorStatus] = useState(EHumorStatus.Emotionless)
    const [sendComment, setSendComment] = useState(false);
    useEffect(() => {
        // api.get('/humors')
    }, [])

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

                <button
                    type="button"
                    className="bg-LIGHT_BLUE 
                            p-2 
                            text-base
                            font-semibold
                          text-WHITE
                            rounded-lg
                            w-24 h-8
                            text-center"
                    onClick={SendHumor}
                >
                    Enviar
                </button>

            </div>

            {sendComment && (
                <textarea
                    className="bg-LIGHT_GRAY mt-2 p-2 max-w-md"
                    cols={40} rows={5} placeholder="Informe aqui seu comentário..." />
            )}

        </div>
    )
}

export default SendHumorComponent