import React, { Suspense } from 'react';
import { Navbar } from '../widgets/layout/navbar';
import routes from '@/routes';
import Link from 'next/link';

const HomePage = () => {
    return (
        <>
            <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
                <Navbar routes={routes} />
            </div>
            <div>
                {routes.map(({ path, element, name }, key) => (
                    <div key={key}>
                        <Link href={path}>
                            <a>{name}</a>
                        </Link>
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HomePage;
