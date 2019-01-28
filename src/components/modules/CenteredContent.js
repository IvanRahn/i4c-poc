import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper} from '../modules';
import InternalLink from './InternalLink';

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
                    <h1>Ready to invest for this cause?</h1>
                    <h2>All of this works for ajdkjsahksahsa</h2>
                    <h3>we slkdja dsk d jkas oq  nmsd nsdk jd a opdpoqdwdowdqpodk kdksad masmdnnm ,sand</h3>
                </Div>
                <Div>
                    <InternalLink text="Join" />
                </Div>
            </ImpactSectionWrapper>

        )
    } 
}


export default CenteredContent
