import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, InternalLink} from '../../../modules';
import image from '../../../../img/handshake.jpg';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';


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
    componentDidMount () {
        this.props.getContent("about/second-section");    
    }

    render () {
        const { color, content, isFetching, error} = this.props;        
        // console.log(content)
        if (isFetching) {
            return (<div> loading</div>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            <SectionWrapper color={color} height="auto">
                <Section>
                    <ImageContainer src= {content[0].image? content[0].image.secure_url: image} />
                    <BrandContainer>
                        <img src={content[0].contentBottom.image_logos.image_logo1.secure_url} />
                        <img src={content[0].contentBottom.image_logos.image_logo2.secure_url} />
                    </BrandContainer>
                </Section>

                <Section>
                    <Wrapper>
                        
                        <h2>{content[0].contentTop.heading}</h2> 
                        <P margin="50px">{content[0].contentTop.text}</P>
                        <h2>{content[0].contentMiddle.heading}</h2>
                        <P margin="50px">{content[0].contentMiddle.text}.</P>
                        <h2>{content[0].contentBottom.heading}</h2>
                        <P margin="30px">{content[0].contentBottom.text}</P>
                        <InternalLink text="SHOUT OUT" />
                        <InternalLink text="SHOUT OUT" />
                        
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutSecond
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(SecondSection);

