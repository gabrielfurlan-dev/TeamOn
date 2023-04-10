import Humour from '../humour';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IHumour, SendHumourProps } from '@/Interfaces/Humour';
import api from "@/lib/axios"
import { TopBar } from '@/layouts/TopBar';
import { NavBar } from '@/layouts/NavBar/NavBar';

export const getServerSideProps: GetServerSideProps<SendHumourProps> = async (context: GetServerSidePropsContext) => {
    const { data: humours } = await api.get<IHumour[]>('humour/all/todays/company')

    return {
        props: {
            humours
        }
    }
}

export default function Home({ humours }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <NavBar>
            <div className='w-screen h-screen bg-LIGHT_GRAY'>
                <div className='mt-4 ml-4 mr-4 bg-WHITE lg:h-1/4 rounded-xl'>
                    <TopBar />
                </div>
                <div className='flex  lg:flex-row flex-col lg:h-[73%]' >
                    <div className='m-4 bg-WHITE lg:w-8/12 rounded-xl' >
                        <Humour humours={humours} />
                    </div>
                    {/* never write className like this, dont break the line */}
                    <div className='flex flex-col items-center justify-center mx-4 mb-4 bg-WHITE lg:mt-4 lg:ml-0 lg:w-4/12 rounded-xl' >
                        <p className='text-RED'>Ranking</p>
                    </div>
                </div>
            </div>
        </NavBar>
    );
}
