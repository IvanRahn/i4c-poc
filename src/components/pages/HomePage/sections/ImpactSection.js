import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, ScrollButton} from "../../../modules";
import {connect} from "react-redux";
import {getContent} from "../../../../actions";
import Background from "./../../../../img/placeholder_background_wave.png"


const ImpactSectionWrapper = styled(SectionWrapper)`
flex-direction: column;
text-align: center;
width: 100%;
padding: 0;
h1 {
    margin-top: auto;
}
:last-of-type(button) {
    margin-top: auto;
}
`
const Div = styled.div `
    padding: 52px 24px;
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
        return (<div> loading</div>)
        } else if (impactError || !impact || !impact[0]){
            return <div>error</div>
        }
        
        return (
            <>
            <ImpactSectionWrapper aria-live="polite" color={color}>
            <Div>
                <h1>{impact[0].heading}</h1>
                <h2>{impact[0].subtext}</h2>
                
                <ScrollButton target="HowItWorks" text="Learn More" />
                </Div>
            {/* <Img src={Background} alt =""/> */}
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
