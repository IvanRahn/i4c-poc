import React from "react";
import styled from "styled-components";
import {SectionWrapper, HeroArticleCard, SmallHorizontalCard, TreeSVG } from "./../../../modules"
import image from "./../../../../img/placeholder_circle_profile_520x520.jpg";

const SVG = styled(TreeSVG)`
margin-bottom: -22px;
`

const ThirdSection = ({cause}) => {
return (
    <SectionWrapper height="auto" padding="120px 0 0 "justify="flex-end" color="green">

        <HeroArticleCard big white padding="300px 0 0"
        CardImage={image}
        CardName="Heading"
        CardHeading="heading2"
        CardText="Dolorem voluptatibus quisquam et nesciunt quis cupiditate. Sequi eum qui tempore a velit perferendis voluptate ipsum. Accusamus dolorem voluptates quia placeat et voluptas nstrum ut. Eum nisi autem ad tenetur. In officiis enim dicta enim itaque aspernatur cons"
        >
        </HeroArticleCard>
        <SVG color="white"/>
    </SectionWrapper>
)
}

export default ThirdSection;
