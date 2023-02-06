import CheckBox from "../../components/CheckBox/CheckBox";
import { EHumorStatus } from "../../enums/EHumorStatus";
import { SetStateAction, useEffect, useState } from "react";
import HumorRating from "../../components/HumorRating/HumorRating";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

// function SendHumor(humor: EHumorStatus, comment: String) {
//     api.post('/humors', { humor: humor, refUser: "kappa2", message: comment })
// }

type Humor = {
    id: string,
    sendDate: Date,
    humorStatus: number,
    refUser: string,
    message: string
}
interface IHumor {
    id: string,
    sendDate: string,
    humorStatus: number,
    refUser: string,
    message: string
}


const getAllHumors = async (userId: string) => {

    const response = await fetch(`http://localhost:5184/humor/all/user`);
    // const response = await fetch(`http://localhost:5184/humor/all/user/${userId}`);

    const data = await response.json();


    const humors = data.map(({ humorStatus,
        id,
        message,
        refUser,
        sendDate
    }: IHumor) => ({
        id,
        sendDate,
        humorStatus,
        refUser,
        message,
    }));

    return humors;
};

function SendHumorComponent({ humours }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [humorStatus, setHumorStatus] = useState(EHumorStatus.Emotionless)
    const [sendComment, setSendComment] = useState(false);
    const [comment, setComment] = useState(String)
    const [humors, setHumors] = useState<Humor[]>([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log("AAAAAAA")
    //         const allHumors = await getAllHumors("");
    //         setHumors(allHumors);
    //     };
    //     fetchData();
    // }, []);

    // function ValidateHumor() {
    //     if (sendComment && comment == "teste")
    //         return alert("Insira um comentário")

    //     // SendHumor(humorStatus, comment);
    // }

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
                {humours && humours.map(item => (
                    <p key={item.id}>{item.humorStatus + " " + item.refUser}</p>
                ))}
            </div>

        </div>
    )
}

type SendHumourType = {
    humours: Humor[]
}

export const getServerSideProps: GetServerSideProps<SendHumourType> = async (context: GetServerSidePropsContext) => {
    const humours = await getAllHumors('')
    console.log(humours)
    return {
        props: {
            humours
        }
    }
}

export default SendHumorComponent
