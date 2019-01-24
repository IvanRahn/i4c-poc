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
const ImpactSectionWrapper = styled(SectionWrapper)`
height: calc(100vh - 110px);
`
const Section = styled.section `
width: 50%;

`
const Span = styled.span `
width: auto;
margin: 0 auto;
::after {
    content: "";
    display: block;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    height: 12px;
    width: 12px;
    margin: 8px auto;
    left: 49.5%;
}
`



class ImpactSection extends Component {
    componentDidMount() {
        this.props.getContent("impactsection")
    }
    render () {
        const {color, impact, impactIsFetching, impactError} = this.props;

        if (impactIsFetching ) {
        return (<div> loading</div>)
        } else if (impactError || !impact || !impact[0]){
            return <div>error</div>
        }
        
        return (
            <ImpactSectionWrapper aria-live="polite" color={color}>
                <Section >
                <Figure>
                    <FigureImage src={impact[0].image ? impact[0].image.secure_url : image} alt="Cheering Man"/>
                    <figcaption>Cheering Man</figcaption>
                </Figure>
                </Section>
                <Section>
                   <HTMLContent content={impact[0].content.text}/>
                   
                    <ButtonLink text="JOIN" color={"green"} href="#"/>
                </Section>
                <Span >Find Out How It Works</Span>
                
            </ImpactSectionWrapper>
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
