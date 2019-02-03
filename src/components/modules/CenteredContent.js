import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from './SectionWrapper';
import InternalLink from './InternalLink';
const ImpactSectionWrapper = styled(SectionWrapper)`
display: flex;
flex-direction: column;
text-align: center;
width: 100%;
padding: 0;
h1 {
    margin-top: auto;
}
`
const Div = styled.div `
    padding: 52px 24px;
`
class CenteredContent extends Component {
    
    render () {
        const {color, firstHeading, secondHeading, thirdHeading, linkText, linkColor, linkLocation} = this.props;
        
        return (
            <ImpactSectionWrapper aria-live="polite" color={color} height="auto">
                <Div>
                    <h1>{firstHeading}</h1>
                    <h2>{secondHeading}</h2>
                    <h3>{thirdHeading}</h3>
                </Div>
                <Div>
                    <InternalLink text={linkText} color={linkColor} location={linkLocation} />
                </Div>
            </ImpactSectionWrapper>
        )
    } 
}
export default CenteredContent
