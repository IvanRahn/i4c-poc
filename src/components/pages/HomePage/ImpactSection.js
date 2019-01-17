import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg"
import SectionWrapper from "./SectionWrapper";
import ButtonLink from "./../../modules/ButtonLink";
import HTMLContent from '../../modules/HTMLContent';
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
width: auto;

::after {
    content: "";
    padding-left: 16px;
    height: 16px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    position: absolute;
    right: 50%;
    margin-top: 20px;
}
`



class ImpactSection extends Component {
    render () {
        console.log(this.props)

        const {color} = this.props;
        const content = "<p>test&nbsp;<a title=\"What title?\" href=\"http://www.google.com\">my sweet sweet link</a>&nbsp;test</p>\r\n<p>tsetset</p>\r\n<p>estest</p>\r\n<p>&nbsp;</p>"
        
        return (
            <SectionWrapper color={color}>
                <Section >
                <Figure>
                    <FigureImage src={image} alt="Cheering Man"/>
                    <figcaption>Cheering Man</figcaption>
                </Figure>
                </Section>
                <Section>
                   <HTMLContent {...this.props} content={content}/>
                   
                    <ButtonLink text="JOIN" color={"green"}/>
                </Section>
                <Span >Find Out How It Works</Span>
                
            </SectionWrapper>
        )
    }
}

export default ImpactSection;