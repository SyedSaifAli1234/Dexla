import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "@/widgets/layout";
import routes from "@/routes";
import React, {Suspense} from 'react';

function App() {
    return (
        <>
            <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
                <Navbar routes={routes}/>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map(({path, element}, key) => (
                        <Route key={key} exact path={path} element={element}/>
                    ))}
                    <Route path="*" element={<Navigate to="/home" replace/>}/>
                </Routes>
            </Suspense>

        </>
    );
}

export default App;
