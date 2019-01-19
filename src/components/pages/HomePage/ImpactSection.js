import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg"
import SectionWrapper from "./SectionWrapper";
import ButtonLink from "./../../modules/ButtonLink";
import HTMLContent from '../../modules/HTMLContent';
import {connect} from "react-redux";
import {getContent} from "./../../../actions"
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
a {
    border-bottom: 3px solid ${props => props.color || "black"};
    display: inline-block;
    color: ${props => props.color || "black"};
    text-align: center;
    text-decoration: none;	
    /* width: auto; */
    ${props => props.auto ? "" : "width: 128px;"}
    margin: 8px 8px;
    height: 32px;
    font-size: 1em;
    :hover {
        color: blue;
    }
    }
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
    right: 49.5%;
    margin-top: 20px;
}
`



class ImpactSection extends Component {
   
    render () {
        const {color} = this.props;
        const content = "<h2>Ducimus id corporis quo fugiat occaecati tempora quia illum. Nihil repellat minima laudantium ut iure ullam. Nam incidunt et nostrum nobis porro quis ut ea. Ducimus voluptatem quis magni aspernatur ut.Possimus odit odio hic dolor architecto. Voluptate est doloribus earum dolor. Iusto qui consequatur molestias aut tenetur. Sint qui in et minima eius at.<h2>"
        
        return (
            <SectionWrapper color={color}>
                <Section >
                <Figure>
                    <FigureImage src={image} alt="Cheering Man"/>
                    <figcaption>Cheering Man</figcaption>
                </Figure>
                </Section>
                <Section>
                   <HTMLContent content={content}/>
                   
                    <ButtonLink text="JOIN" color={"green"} href="#"/>
                </Section>
                <Span >Find Out How It Works</Span>
                
            </SectionWrapper>
        )
    }
}


export default ImpactSection;