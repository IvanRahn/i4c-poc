import React, { Suspense, lazy } from "react";

import NavBar from '../../modules/NavBar';
const Footer = lazy(() => import('../../modules/Footer')) ;


const HomePage = () => {
        return (
            <div>
                <NavBar />
                Hello this is the Cause Page
            </div>
        );
    }


export default HomePage