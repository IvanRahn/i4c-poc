import React, { Suspense, lazy } from "react";
import ImpactSection from './ImpactSection';
import NavBar from './../../modules/NavBar';
const HowitWorksSection = lazy(() => import('./HowItWorksSection')) ;
const MoreI4cSection = lazy(() => import('././../../pages/HomePage/MoreI4cSection')) ;
const FeaturedCauseSection = lazy(() => import('./../../pages/HomePage/FeaturedCauseSection')) ;
const Footer = lazy(() => import('./../../modules/Footer')) ;


const HomePage = () => {
        return (
            <>
                <NavBar/>
                <main>
                    <ImpactSection />
                    <Suspense fallback="">
                    <HowitWorksSection color="green"/>
                    <FeaturedCauseSection />
                    <MoreI4cSection color="green" />
                    </Suspense>
                </main>
                <Suspense fallback="">
                <Footer />
                </Suspense>
            </>
        );
    }


export default HomePage