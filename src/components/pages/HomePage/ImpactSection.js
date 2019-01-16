import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg"
import SectionWrapper from "./SectionWrapper";
// const SectionWrapper = styled.section`
// height: 100vh;
//  display: flex;
//  justify-content: center;
//  width: 80%;
//  margin: 0 auto;
// align-items: center; 
// `
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
                    <h1>You invest your donation in sustainability, the dividends supports impactful charities</h1>
                </Section>
            </SectionWrapper>
        )
    }
}

export default ImpactSection;