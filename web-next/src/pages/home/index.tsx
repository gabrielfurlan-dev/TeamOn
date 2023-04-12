import React from 'react';
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
            <div className='bg-LIGHT_THEME_BACKGROUND_SECONDARY dark:bg-DARK_THEME_BACKGROUND
                            dark:text-DARK_THEME_TEXT
                             h-screen w-screen'>

                <div className='bg-LIGHT_THEME_BACKGROUND dark:bg-DARK_THEME_BACKGROUND_SECONDARY
                                mt-4 mr-4 ml-4 lg:h-1/4 rounded-xl'>
                    <TopBar />
                </div>

                <div className='flex  lg:flex-row flex-col lg:h-[73%]' >

                    <div className='bg-LIGHT_THEME_BACKGROUND dark:bg-DARK_THEME_BACKGROUND_SECONDARY
                                     m-4 lg:w-8/12 rounded-xl' >
                        <Humour humours={humours} />
                    </div>

                    <div className='bg-LIGHT_THEME_BACKGROUND dark:bg-DARK_THEME_BACKGROUND_SECONDARY
                                  lg:mt-4 lg:ml-0
                                  mx-4 mb-4
                                  lg:w-4/12
                                  rounded-xl
                                  flex flex-col items-center justify-center' >

                        <p className='text-RED'>Ranking</p>

                    </div>
                </div>

            </div>

        </NavBar>
    );
}
