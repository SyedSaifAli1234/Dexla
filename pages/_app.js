import '../src/css/App.css';
import '../src/css/index.css';
import '../src/css/home.css';
import '../src/css/contact.css';
import '../src/css/actualities.css';
import '../src/css/about.css';
import '../src/css/expertises.css';
import '../src/css/styling.css';
import {Head} from "next/document";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>NS Avocat</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
