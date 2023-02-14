import CheckBox from "../../components/CheckBox/CheckBox";
import { EHumourStatus as EHumourStatus } from "../../enums/EHumourStatus";
import { useState } from "react";
import HumourRating from "../../components/HumourRating/HumourRating";
import { IHumour, SendHumourProps } from "@/Interfaces/Humour";

function SendHumourComponent({ humours: humoursProps }: SendHumourProps) {

    const [humourStatus, setHumourStatus] = useState(EHumourStatus.Emotionless)
    const [sendComment, setSendComment] = useState(false);

    return (
        <div className=" m-2 flex flex-col items-center ">
            <h1 className="text-DARK_GRAY font-normal text-3xl mb-5">Humour</h1>
            <HumourRating
                humourStatus={humourStatus}
                setHumourStatus={setHumourStatus}
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
                >
                    Enviar
                </button>
            </div>
            {sendComment && (
                <textarea
                    className="bg-LIGHT_GRAY mt-2 p-2 max-w-md"
                    cols={40} rows={5} placeholder="Informe aqui seu comentário..." />
            )}
            <div>
                {humoursProps && humoursProps.map(item => (

                    <p key={item.id}>{`${item.humourStatus} ${item.refUser}`}</p>
                ))}
            </div>
        </div>
    )
}

export default SendHumourComponent
