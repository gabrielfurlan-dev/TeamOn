import { EHumourStatus } from "@/enums/EHumourStatus"
import { IHumour, SendHumourProps } from "@/Interfaces/Humour"
import SendHumourComponent from "@/layouts/SendHumour/SendHumour"
import api from "@/lib/axios"
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import swal from "sweetalert";

export default function Humour({ humours }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (<SendHumourComponent humours={humours} />)
}

export async function SendHumour(humourStatus: EHumourStatus, message: string, refUser: string, refCompany: string): Promise<void> {
    try {
        await api.post("/humour/send",
            {
                humourStatus: humourStatus,
                message: message,
                refUser: refUser,
                refCompany: refCompany
            }
        )
    } catch (error) {
        swal("Ops! Algo deu errado.", "Não foi possível enviar o humor, tente novamente mais tarde.");
    }
}

export const getServerSideProps: GetServerSideProps<SendHumourProps> = async (context: GetServerSidePropsContext) => {
    const { data: humours } = await api.get<IHumour[]>('humour/all/user')

    return {
        props: {
            humours
        }
    }
}
