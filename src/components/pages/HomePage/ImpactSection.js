import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg"
import SectionWrapper from "./SectionWrapper";
import ButtonLink from "./../../modules/ButtonLink";

const Figure = styled.figure `
width: 50%;
margin: 0 auto;
`

const FigureImage = styled.img`
height: auto; 
width: auto; 
max-width: 250px; 
max-height: 250px;
margin: 0 auto;
`

const Section = styled.section `
width: 50%;
`
const Span = styled.span `
::after {
    /* content: attr(Span) " &or;"; */
}
`



class ImpactSection extends Component {
    render () {
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
                <Section >
                <Figure>
                    <FigureImage src={image} alt="Cheering Man"/>
                    <figcaption>Cheering Man</figcaption>
                </Figure>
                </Section>
                <Section>
                    <h1>You invest your donation in sustainability, the dividends supports impactful charities &#8744;</h1>
                    <ButtonLink text="JOIN" color={"green"}/>
                </Section>
                <Span>Find Out How It Works</Span>
            </SectionWrapper>
        )
    }
}

export default ImpactSection;