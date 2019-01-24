import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "./../../modules/SectionWrapperV2";
import ButtonLink from "./../../modules/ButtonLink";
import HTMLContent from '../../modules/HTMLContent';
import {connect} from "react-redux";
import {getContent} from "./../../../actions";
import image from "./../../../img/cartoon.jpg"
import ScrollButton from "./../../modules/ScrollButton"
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
/* margin-top: 110px; */
`
const Section = styled.section `
width: 50%;

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
                <ScrollButton target="HowItWorks" text="Learn More" />
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
