import React from "react";
import styled from "styled-components";
import {SectionWrapper, HeroArticleCard, TreeSVG, ErrorBoundary } from "./../../../modules"

const SVG = styled(TreeSVG)`
margin-bottom: -22px;
`

const ThirdSection = ({cause}) => {
return (
    <ErrorBoundary>
    <SectionWrapper 
    height="auto" 
    padding="120px 0 0"
    mobilePadding="140px 0 0"
    justify="flex-end" color="green">

        <HeroArticleCard big white padding="300px 0 0"
        CardImage={cause.story.image ? cause.story.image.secure_url : null}
        CardName={cause.story.heading}
        CardHeading={cause.story.subHeading}
        CardText={cause.story.text}
        >
        </HeroArticleCard>
        <SVG color="white"/>
    </SectionWrapper>
    </ErrorBoundary>
)
}

export default ThirdSection;
