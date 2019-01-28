import React, { Suspense, lazy } from "react";
import ImpactSection from './sections/ImpactSection';
import withTracker from '../../google_analytics/withTracker';
const HowitWorksSection = lazy(() => import('./sections/HowItWorksSection')) ;
const MoreI4cSection = lazy(() => import('./sections/MoreI4cSection')) ;
const FeaturedCauseSection = lazy(() => import('./sections/FeaturedCauseSection')) ;
const TeamSection= lazy(() => import('./sections/TeamSection')) ;


const HomePage = () => {
        return (
            <>
                    <ImpactSection />
                    <Suspense fallback="">
                        <HowitWorksSection color="green"/>
                        <TeamSection />
                        <FeaturedCauseSection />
                        <MoreI4cSection color="green" />
                    </Suspense>
                
            </>
        );
    }


export default withTracker(HomePage)