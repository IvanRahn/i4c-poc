import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper} from "../../../modules";

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

class CenteredContent extends Component {

    
    render () {
        const {color} = this.props;
        
        return (
            <ImpactSectionWrapper aria-live="polite" color={color}>
                <Div>
                  
                </Div>
            </ImpactSectionWrapper>

        )
    } 
}


export default CenteredContent
