import React from 'react';
import Humour from '../humour';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IHumour, SendHumourProps } from '@/Interfaces/Humour';
import api from "@/lib/axios"

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
        <div className='bg-LIGHT_GRAY h-screen w-screen'>

            <div
                className='bg-WHITE
                             mt-4 mr-4 ml-4
                             h-1/4
                             rounded-xl
                             flex flex-col items-center justify-center'
            >
                <p className='text-RED'>Navbar</p>
            </div>

            <div
                className='flex  lg:flex-row flex-col
                           lg:h-[73%]'
            >
                <div className='bg-WHITE
                                  m-4
                                  lg:w-8/12
                                  rounded-xl'
                >
                    <Humour humours={humours} />
                </div>
                <div className='bg-WHITE
                                  lg:mt-4 lg:ml-0
                                  mx-4 mb-4
                                  lg:w-4/12
                                  rounded-xl
                                  flex flex-col items-center justify-center'
                >
                    <p className='text-RED'>Ranking</p>
                </div>
            </div>

        </div>
    );
}
