import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/handshake.jpg';
import ButtonLink from './../../../modules/ButtonLink';
import brand from '../../../../img/paremium.png'


const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 600px; 
max-height: 600px;
margin: -80px auto 0 auto; 
`
const BrandContainer = styled.div`

`

const Section = styled.div `
width: ${props => props.width || "100%"};
text-align: center;
height: 100%;
@media (min-width: 768px){
    width: 50%;
}
`
const Wrapper = styled.div`
text-align: left;
padding-right: 180px;
`
const P = styled.p`
margin-bottom: ${props => props.margin || "0px"};
`


class SecondSection extends Component {
    render () {
        const {color} = this.props;
        
        return (
            <SectionWrapper color={color} height="auto">
                <Section>
                    <ImageContainer src= {image} />
                    <BrandContainer>
                        <img src={brand} />
                        <img src={brand} />
                    </BrandContainer>
                </Section>

                <Section>
                    <Wrapper>
                        
                        <h2>We started with just us two..</h2> 
                        <P margin="50px">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                        <h2>Then we grew...</h2>
                        <P margin="50px">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                        <h2>For more of what we do....</h2>
                        <P margin="30px">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
                        <ButtonLink text="SHOUT OUT" />
                        <ButtonLink text="SHOUT OUT" />
                        
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
    } 
}


export default SecondSection;
