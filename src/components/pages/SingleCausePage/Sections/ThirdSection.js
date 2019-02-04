import React from "react";
import styled from "styled-components";
import {SectionWrapper, HeroArticleCard, SmallHorizontalCard, TreeSVG } from "./../../../modules"
import image from "./../../../../img/placeholder_circle_profile_520x520.jpg";

const Div = styled.div`
height: 50%;


`
const ThirdSection = ({cause}) => {
return (
    <SectionWrapper color="green" height="auto">

        <HeroArticleCard big white padding="300px 0 0"
        CardImage={image}
        CardName="Heading"
        // CardHeading="heading2"
        CardText="Dolorem voluptatibus quisquam et nesciunt quis cupiditate. Sequi eum qui tempore a velit perferendis voluptate ipsum. Accusamus dolorem voluptates quia placeat et voluptas nstrum ut. Eum nisi autem ad tenetur. In officiis enim dicta enim itaque aspernatur cons"
        >
        {/* <Div>? */}
        {/* <SmallHorizontalCard 
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
            </SmallHorizontalCard> */}
    {/* </Div> */}
        </HeroArticleCard>
        <TreeSVG color="white"/>
    </SectionWrapper>
)
}

export default ThirdSection;
