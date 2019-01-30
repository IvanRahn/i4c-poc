import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, ScrollButton} from "../../../modules";
import {connect} from "react-redux";
import {getContent} from "../../../../actions";
import Background from "./../../../../img/placeholder_background_wave.png"
import {Loading} from "./../../../modules"

const ImpactSectionWrapper = styled(SectionWrapper)`
flex-direction: column;
text-align: center;
padding: 0;
position: relative;

button {
    margin: auto auto 0;
    @media only screen and (max-width: 500px) {
    position: absolute;
    left: 16px;
    /* bottom: 24vh; */
    }
}
`
const Div = styled.div `
    padding: 52px 24px;
    /* margin: auto auto; */
`
const Img = styled.img `
    width: 100%;
    margin: auto auto 0;
`

class ImpactSection extends Component {
    componentDidMount() {
        this.props.getContent("impactsection")
    }
    
    render () {
        const {color, impact, impactIsFetching, impactError} = this.props;

        if (impactIsFetching ) {
        return (<Loading/>)
        } else if (impactError || !impact || !impact[0]){
            return <div>error</div>
        }
        
        return (
            <>
            <ImpactSectionWrapper height="100vh" aria-live="polite" color={color}>
            <Div>
                <h1>{impact[0].heading}</h1>
                <p>{impact[0].subtext}</p>
                
                </Div>
                <Div>
                <ScrollButton target="HowItWorks" text="Learn More" />
                </Div>
            <Img src={Background} alt =""/>
            </ImpactSectionWrapper>
            </>
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
