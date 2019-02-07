import React, { Suspense, lazy } from "react";
import ImpactSection from './sections/ImpactSection';
import {darkGreen} from "./../../modules/BrandStyle"
const HowItWorksSection = lazy(() => import('./../../modules/pageLayout/HowItWorksSection')) ;
const FeaturedCauseSection = lazy(() => import('./../../modules/pageLayout/FeaturedCauseSection')) ;
const TeamSection= lazy(() => import('./sections/TeamSection')) ;


const HomePage = (props) => {


        return (
            <>      
                    <ImpactSection />
                    <Suspense fallback="">
                        <HowItWorksSection 
                        cardCount={3}
                        color={darkGreen}
                        />
                        <TeamSection/>
                        <FeaturedCauseSection 
                        cardCount={2}
                        />
                            
                    </Suspense>
                
            </>
        );
    }


export default HomePage;