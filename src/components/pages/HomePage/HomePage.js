import React, { Suspense, lazy } from "react";
import ImpactSection from './sections/ImpactSection';
import withTracker from '../../google_analytics/withTracker';
import {darkGreen} from "./../../modules/BrandStyle"

const HowItWorksSection = lazy(() => import('./../../modules/HowItWorksSection')) ;
console.log('TCL: HowitWorksSection', HowItWorksSection)
const MoreI4cSection = lazy(() => import('./sections/MoreI4cSection')) ;
const FeaturedCauseSection = lazy(() => import('./sections/FeaturedCauseSection')) ;
const TeamSection= lazy(() => import('./../../modules/FeaturedCauseSection')) ;


const HomePage = () => {
        return (
            <>
                    <ImpactSection />
                    <Suspense fallback="">
                        <HowItWorksSection color={darkGreen}/>
                        <TeamSection />
                        <FeaturedCauseSection/>
                            
                        <MoreI4cSection color={darkGreen} />
                    </Suspense>
                
            </>
        );
    }


export default withTracker(HomePage)