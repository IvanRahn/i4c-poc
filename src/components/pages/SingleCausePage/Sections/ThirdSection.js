import React from "react";
import styled from "styled-components";
import {SectionWrapper, HorizontalCard, SmallHorizontalCard, TreeSVG } from "./../../../modules"
import image from "./../../../../img/placeholder_circle_profile_520x520.jpg";

const Div = styled.div`
height: 50%;


`
const ThirdSection = ({cause}) => {
return (
    <SectionWrapper color="green" height="auto">

        <HorizontalCard
        CardImage={image}
        CardHeading="Heading"
        CardText="asfsadfasdfasdfasfasdfasfasdf"
        >
        <Div>
        <SmallHorizontalCard 
            key={cause._id}
            to={`cause/${cause.slug}`}
            CardHeading={cause.cardContent.heading} 
            CardText="always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " 
            >
           
            </SmallHorizontalCard>
            <SmallHorizontalCard 
            key={cause._id}
            to={`cause/${cause.slug}`}
            CardHeading={cause.cardContent.heading} 
            CardText="always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " 
            >
            
            </SmallHorizontalCard>
            <SmallHorizontalCard 
            key={cause._id}
            to={`cause/${cause.slug}`}
            CardHeading={cause.cardContent.heading} 
            CardText="always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " 
            >
            </SmallHorizontalCard>
    </Div>
        </HorizontalCard>
        <TreeSVG color="white"/>
    </SectionWrapper>
)
}

export default ThirdSection;
