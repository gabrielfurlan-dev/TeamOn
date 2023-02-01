import Head from 'next/head'

import Logo from '../assets/Logo_TeamOn.svg'
import HomePage from './HomePage/HomePage';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>TeamOn</title>
            </Head>

            <main>

                <HomePage />

            </main>
        </>
    )
}

export default Home;
