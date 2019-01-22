import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "./SectionWrapper";
import ButtonLink from "./../../modules/ButtonLink";
import HTMLContent from '../../modules/HTMLContent';
import {connect} from "react-redux";
import {getContent} from "./../../../actions";
import image from "./../../../img/cartoon.jpg"
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
    componentDidMount() {
        this.props.getContent("impactsection")
    }
    render () {
        const {color, impact, impactIsFetching, impactError} = this.props;
        // console.log("Impact: ", this.props)
        if (impactIsFetching ) {
        return (<div> loading</div>)
        } else if (impactError || !impact || !impact[0]){
            return <div>error</div>
        }
        
        return (
            <SectionWrapper color={color}>
                <Section >
                <Figure>
                    <FigureImage src={impact[0].image ? impact[0].image.secure_url : image} alt="Cheering Man"/>
                    <figcaption>Cheering Man</figcaption>
                </Figure>
                </Section>
                <Section>
                   <HTMLContent content={`<h1>${impact[0].title}</h1>`}/>
                   
                    <ButtonLink text="JOIN" color={"green"} href="#"/>
                </Section>
                <Span >Find Out How It Works</Span>
                
            </SectionWrapper>
        )
    } 
}


const mapStateToProps = (state) => {
    const {impact, impactIsFetching, impactError} = state.impact
    return {
        impact,
        impactError,
        impactIsFetching
    }
}

export default connect(mapStateToProps, {getContent})(ImpactSection);
