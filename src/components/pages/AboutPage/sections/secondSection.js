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
margin: -400px auto 0 auto; 
`

const Section = styled.div `
width: 50%;
text-align: center;
/* Add media query to make width 100% for mobile */
`
const Wrapper = styled.div`
text-align: left;
padding-right: 180px;
`
const P = styled.p`
margin-bottom: 70px;
`


class SecondSection extends Component {
    render () {
        const {color} = this.props;
        
        return (
            <SectionWrapper color={color}>
                <Section>
                    <ImageContainer src= {image} />
                </Section>

                <Section>
                    <Wrapper>
                        
                        <h2>We started with just us two..</h2> 
                        <P>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                        <h2>Then we grew...</h2>
                        <P>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                        <h2>For more of what we do....</h2>
                        <P>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
                        <ButtonLink text="SHOUT OUT" />
                        <ButtonLink text="SHOUT OUT" />
                        
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
    } 
}


export default SecondSection;
