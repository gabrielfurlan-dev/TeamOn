import CheckBox from "../../components/CheckBox/CheckBox";
import { EHumourStatus as EHumourStatus } from "../../enums/EHumourStatus";
import { useEffect, useState } from "react";
import HumourRating from "../../components/HumourRating/HumourRating";
import { SendHumourProps } from "@/Interfaces/Humour";
import Humours from '@/assets/humours'
import { SendHumour } from "@/pages/humour";

function SendHumourComponent({ humours: humoursProps }: SendHumourProps) {

    const [humourStatus, setHumourStatus] = useState(EHumourStatus.Emotionless)
    const [sendComment, setSendComment] = useState(true);
    const [comment, setComment] = useState(String);

    useEffect(() => {
        if (!sendComment) {
            setComment('');
        }
    }, [sendComment]);

    function SendHumorHandle(): void {
        SendHumour(humourStatus, comment, "Teste");
    }

    return (
        <div className=" m-2 flex flex-col items-center ">
            <h1 className="text-DARK_GRAY font-normal text-3xl mb-5">Humour</h1>
            <HumourRating
                humourStatus={humourStatus}
                setHumourStatus={setHumourStatus}
            />
            <div className="flex flex-row m-4 items-center ">
                <div className="mx-4">
                    <CheckBox
                        title={"Enviar Comentário"}
                        checked={sendComment}
                        setChecked={setSendComment}
                    />
                </div>
                <button
                    type="button"
                    className="bg-LIGHT_BLUE
                            text-base
                            font-semibold
                          text-WHITE
                            rounded-lg
                            w-24 h-10
                            text-center"
                    onClick={() => SendHumorHandle()}
                >
                    Enviar
                </button>
            </div>
            {sendComment && (
                <textarea
                    className="bg-LIGHT_GRAY mt-2 p-2 mb-8 max-w-md"
                    cols={40} rows={5} placeholder="Informe aqui seu comentário..."
                    onChange={event => setComment(event.target.value)} />
            )}

            <p className="mb-4 text-DARK_GRAY">O que está rolando</p>

            <div className="w-full max-w-md">
                {humoursProps && humoursProps.map(item => (
                    <div className="flex justify-between bg-LIGHT_GRAY py-2 m-2 px-4 rounded-lg">
                        <p
                            className="text-GRAY"
                            key={item.id}>
                            {`${item.refUser} enviou seu humor hoje!`}
                        </p>
                        <div className="mx-4 mt-1">
                            <Humours />
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default SendHumourComponent
