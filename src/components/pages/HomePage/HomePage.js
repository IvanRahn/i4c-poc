import React, { Suspense, lazy } from "react";
import ImpactSection from './sections/ImpactSection';
import withTracker from '../../google_analytics/withTracker';
import {darkGreen} from "./../../modules/BrandStyle"
const HowItWorksSection = lazy(() => import('./../../modules')) ;
const MoreI4cSection = lazy(() => import('./sections/MoreI4cSection')) ;
const FeaturedCauseSection = lazy(() => import('./../../modules')) ;
const TeamSection= lazy(() => import('./sections/TeamSection')) ;


const HomePage = () => {
        return (
            <>      
                    <ImpactSection />
                    <Suspense fallback="">
                        <HowItWorksSection cardCount={3}color={darkGreen}/>
                        <TeamSection />
                        <FeaturedCauseSection cardCount={2}/>
                            
                        <MoreI4cSection color={darkGreen} />
                    </Suspense>
                
            </>
        );
    }


export default withTracker(HomePage)