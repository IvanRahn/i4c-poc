import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, InternalLink, Card} from '../../../modules';
import image from '../../../../img/handshake.jpg';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 600px; 
max-height: 600px;
margin: -200px auto 0 auto; 
`

const Section = styled.div `
width: ${props => props.width || "100%"};
text-align: center;
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

const BorderP = styled.p`
color: white;
background-color: green;
`

class FirstSection extends Component {

    componentDidMount () {
        this.props.getContent("about/first-section");    
    }

    render () {
        const { color, content, isFetching, error} = this.props;        
        if (isFetching) {
            return (<div> loading</div>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            
            <SectionWrapper color={color}>
                <Section>
                    <ImageContainer src= {content[0].image? content[0].image.secure_url : image} alt="Cherring man" />

                    <Card CardHeading={content[0].card.heading} CardText={content[0].card.text} CardImage={content[0].card.pageImage? content[0].card.pageImage.secure_url: image} display="flex" />
                </Section>

                <Section>
                    <Wrapper>
                        <BorderP>{content[0].linkTop.text}</BorderP>
                        <h1>{content[0].contentTop.heading}</h1> 
                        <P margin="70px">{content[0].contentTop.text}</P>
                        <h2>{content[0].contentBottom.heading}</h2>
                        <P margin="20px">{content[0].contentBottom.text}</P>
                        <InternalLink text={content[0].contentBottom.link.text} color={content[0].contentBottom.link.color} href={content[0].contentBottom.link.href} />
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutFirst
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(FirstSection);

