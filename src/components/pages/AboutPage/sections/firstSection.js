import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/handshake.jpg';
import ButtonLink from './../../../modules/ButtonLink';

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 600px; 
max-height: 600px;
`

const Section = styled.div `
width: 50%;
text-align: center;
/* Add media query to make width 100% for mobile */
`
const Wrapper = styled.div`
text-align: left;
padding-right: 140px;
`
class FirstSection extends Component {
    render () {
        const {color} = this.props;
        
        return (
            <SectionWrapper color={color}>
                <Section>
                    <ImageContainer src= {image} />
                    <p>Make component here</p>
                </Section>

                <Section>
                    <Wrapper>
                        <p>ABOUT INVESTING FOR CHARITY LTD</p>
                        <h1>Donate once, give forever.</h1> 
                        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <h2>Investing for Charity helps donors give more effectively</h2>
                        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>For more of what we do....</p>
                        <ButtonLink text="DOWNLOAD PDF" color="green" />
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
    } 
}


export default FirstSection;
