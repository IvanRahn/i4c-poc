import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/handshake.jpg';
import ButtonLink from './../../../modules/ButtonLink';

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 500px; 
max-height: 600px;
`

const Section = styled.div `
width: 50%;
margin-right: 2em;
text-align: left;
`
class FirstSection extends Component {
    render () {
        const {color} = this.props;
        
        return (
            <SectionWrapper color={color}>
                <ImageContainer src= {image} />

                <Section>
                    <h1>"Our <ButtonLink text="qualified team"/> did the research, so you don't have to.</h1> 
                    <h3>The Australian charity sector holds over $30 billion dollars in cash reserves earning very low returns. A donation to I4C goes much further.</h3>
                    <h3>Most charities rely on regular donations to sustain their programs. <ButtonLink text="Join us" /> to make an everlasting impact.</h3> 
                    <ButtonLink text="Vetted by our Board of Trustees" />
                
                </Section>
            </SectionWrapper>
        )
    } 
}


export default FirstSection;
