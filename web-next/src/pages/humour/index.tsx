import { IHumour, SendHumourProps } from "@/Interfaces/Humour"
import SendHumourComponent from "@/layouts/SendHumour/SendHumour"
import api from "@/lib/axios"
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

export default function Humour({ humours }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (<SendHumourComponent humours={humours} />)
}

export const getServerSideProps: GetServerSideProps<SendHumourProps> = async (context: GetServerSidePropsContext) => {

    const { data: humours } = await api.get<IHumour[]>('humour/all/user')

    return {
        props: {
            humours
        }
    }
}
