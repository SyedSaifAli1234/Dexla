import React from 'react';
import { Navbar } from '@/widgets/layout';
import '../App.css';
import routes from "@/routes";

function App({ Component, pageProps }) {
    return (
        <>
            <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
                <Navbar routes={routes} />
            </div>
            <Component {...pageProps} />
        </>
    );
}

export default App;
