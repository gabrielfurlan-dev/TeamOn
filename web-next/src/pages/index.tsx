import Head from 'next/head'

import Logo from '../assets/Logo_TeamOn.svg'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>TeamOn</title>
      </Head>

      <main>
        <Logo/>
        <h1>Hello, World!</h1>
      </main>
    </>
  )
}

export default Home;
