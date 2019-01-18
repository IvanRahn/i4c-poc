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
    constructor(props) {
        super(props);
        this.props.getContent()
    }
    render () {
        const {color} = this.props;
        console.log(this.props)
        let content;
        if (this.props.content.isFetching) {
            return (
                <SectionWrapper>Loading</SectionWrapper>
            )
        // } else {
        //     content = {content: {content: {content: {extended: ""}}}}
        //     console.log("hit")
        }
        content = this.props.content.content.content.extended

        // console.log(content)
        return (
            <SectionWrapper color={color}>
                <Section >
                <Figure>
                    <FigureImage src={image} alt="Cheering Man"/>
                    <figcaption>Cheering Man</figcaption>
                </Figure>
                </Section>
                <Section>
                   {/* <HTMLContent content={`<h1>${content.title}</h1>`}/> */}
                   <HTMLContent content={content}/>
                   
                    <ButtonLink text="JOIN" color={"green"}/>
                </Section>
                <Span >Find Out How It Works</Span>
                
            </SectionWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        content: state.content,
        isFetching: state.isFetching,
        error: state.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getContent: () => dispatch(getContent())
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImpactSection);