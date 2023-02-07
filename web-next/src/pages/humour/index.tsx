import { IHumor, SendHumourProps } from "@/Interfaces/Humour"
import SendHumorComponent from "@/layouts/SendHumor/SendHumor"
import api from "@/lib/axios"
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

export default function Humour({ humours }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (<SendHumorComponent humours={humours} />)
}


export const getServerSideProps: GetServerSideProps<SendHumourProps> = async (context: GetServerSidePropsContext) => {

    const { data: humours } = await api.get<IHumor[]>('humor/all/user')

    return {
        props: {
            humours
        }
    }
}
