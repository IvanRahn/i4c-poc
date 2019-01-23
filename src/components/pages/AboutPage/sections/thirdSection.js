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
margin: -34px auto 0 auto; 
`
const Section = styled.div `
height: 50%;
width: ${props => props.width || "50%"};
text-align: center;
/* Add media query to make width 100% for mobile */
`
const Wrapper = styled.div`
text-align: left;
padding-right: 180px;
`
const P = styled.p`
margin-bottom: ${props => props.margin || "0px"};
`

class ThirdSection extends Component {
    render () {
        const {color} = this.props;
        return (
        <SectionWrapper color={color}>
            <Section >
                <ImageContainer src= {image} />
            </Section>

            <Section>
                <Wrapper>
                    
                    <h2>The people who make the hard decisions for us, out Board of Trustees.</h2> 
                    <P margin="50px">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
                    <ButtonLink text="GET TO KNOW OUR BOARD" />
                    
                </Wrapper>               
            </Section>

            <Section width="100%">
                <h2>All this works because of our Donors.</h2>
                <ButtonLink text="LEARN HOW IT WORKS" color="green" />

            </Section>
        </SectionWrapper>
        )
    } 
}


export default ThirdSection;
