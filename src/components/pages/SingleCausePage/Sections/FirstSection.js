import React from 'react';
import {PageOpener, CardSection, ErrorBoundary} from "../../../modules";


const FirstSection = ({cause}) => {
        const impactList = Object.values(cause.impact)
        const information = [{heading: `<h1>${cause.topSection.heading}</h1>`, text: cause.topSection.text} ]
        return ( 
        <ErrorBoundary>
        <PageOpener 
        padding="0 0 52px"
        mobilePadding="0"
           image={cause.topSection.image.secure_url}
           information={information}
           breadcrumbs={[
            {to: "/cause", text:"Causes we care about"}, 
            {to: "#", text: cause.title.name} 
        ]}
            >
           <></>
           <CardSection content={impactList}/>


        </PageOpener>
        </ErrorBoundary>
         );
    }

export default FirstSection;
