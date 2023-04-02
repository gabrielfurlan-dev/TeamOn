import CheckBox from "../../components/CheckBox/CheckBox";
import { EHumourStatus as EHumourStatus } from "../../enums/EHumourStatus";
import { useEffect, useState } from "react";
import HumourRating from "../../components/HumourRating/HumourRating";
import { IHumour, SendHumourProps } from "@/Interfaces/Humour";
import Humours from '@/assets/humours'
import { GetHumoursByUser, SendHumour } from "@/hooks/useHumors";
import { Check } from "phosphor-react";

function SendHumourComponent({ humours: humoursProps }: SendHumourProps) {
    const [humours, setHumours] = useState<IHumour[]>(humoursProps)
    const [humourAlreadySended, sethumourAlreadySended] = useState(false)
    const [humourStatus, setHumourStatus] = useState(EHumourStatus.Emotionless)
    const [sendComment, setSendComment] = useState(false);
    const [comment, setComment] = useState(String);

    useEffect(() => {
        let humourTodayAlreadySended = humours.find(x => x.refUser == "refUser")
        if (humourTodayAlreadySended)
            sethumourAlreadySended(true);
    }, [])

    useEffect(() => {
        if (!sendComment) {
            setComment('');
        }
    }, [sendComment]);

    function SendHumorHandle(): void {
        SendHumour(humourStatus, comment, "refUser", "refCompany");
        GetHumoursByUser().then(response => setHumours(response.data))
    }

    function LoadSendHumourForm() {
        return (
            <>
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
                        className="bg-LIGHT_GRAY mt-2 p-4 mb-8 max-w-md rounded-lg"
                        cols={40} rows={5} placeholder="Informe aqui seu comentário..."
                        onChange={event => setComment(event.target.value)} />
                )}
            </>)
    }

    return (

        <div className=" m-2 flex flex-col items-center w-full">
            <h1 className="text-DARK_GRAY font-normal text-3xl mb-5 mt-20">Humours</h1>

            {!humourAlreadySended ? (LoadSendHumourForm()) :
                (
                    <div className="mb-10 mt-2 text-lg text-GRAY flex flex-row">
                        <Check size={24} weight="bold" className="pr-2" />
                        <p>Você já enviou seu humor hoje.</p>
                    </div>
                )
            }
            <div className="w-full flex flex-col items-center">

                <div className="">
                    <p className="mb-4 mt-4 text-DARK_GRAY font-semibold w-full">O que está rolando</p>
                </div>

                <div className="w-full mt-10 max-w-md" id="humoursList">
                    {humours.length != 0 ? humours.map(item => (
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
                    )) : <p className="bg-LIGHT_GRAY p-4 text-center rounded-lg">Ninguem enviou o humor hoje.</p>}
                </div>
            </div>
        </div>
    )
}

export default SendHumourComponent
