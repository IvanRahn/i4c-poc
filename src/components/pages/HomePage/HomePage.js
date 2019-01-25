import React, { Suspense, lazy } from "react";
import ImpactSection from './sections/ImpactSection';
const HowitWorksSection = lazy(() => import('./sections/HowItWorksSection')) ;
const MoreI4cSection = lazy(() => import('./sections/MoreI4cSection')) ;
const FeaturedCauseSection = lazy(() => import('./sections/FeaturedCauseSection')) ;
const CTASection= lazy(() => import('./sections/CTASection')) ;



const HomePage = () => {
        return (
            <>
                    <ImpactSection />
                    <Suspense fallback="">
                        <HowitWorksSection color="green"/>
                        <CTASection />
                        <FeaturedCauseSection />
                        <MoreI4cSection color="green" />
                    </Suspense>
                
            </>
        );
    }


export default HomePage