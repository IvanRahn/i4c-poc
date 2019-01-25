import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "../../../modules/SectionWrapper";
import ButtonLink from "../../../modules/InternalLink";
import HTMLContent from '../../../modules/HTMLContent';
import {connect} from "react-redux";
import {getContent} from "../../../../actions";
import ScrollButton from "../../../modules/ScrollButton"


const ImpactSectionWrapper = styled(SectionWrapper)`
flex-direction: column;
text-align: center;
width: 50%;
h1 {
    margin-top: auto;

}
:last-of-type(button) {
    margin-top: auto;
}
`

class ImpactSection extends Component {
    componentDidMount() {
        this.props.getContent("impactsection")
    }
    
    render () {
        const {color, impact, impactIsFetching, impactError} = this.props;
		console.log('​ImpactSection -> render -> impact', impact)

        if (impactIsFetching ) {
        return (<div> loading</div>)
        } else if (impactError || !impact || !impact[0]){
            return <div>error</div>
        }
        
        return (
            <ImpactSectionWrapper aria-live="polite" color={color}>
                <h1>{impact[0].heading}</h1>
                <h2>{impact[0].subtext}</h2>
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
