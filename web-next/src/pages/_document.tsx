import { Html, Head, Main, NextScript } from 'next/document'
import { render } from 'react-dom';

const Document: React.FC = () => {
    return (
        <Html lang="pt-br">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="../assets/favicon.ico" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
