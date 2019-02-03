import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, InternalLink} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "../../../modules"

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 600px; 
max-height: 600px;
margin: -34px auto 0 auto; 
`
const Section = styled.div `
height: 50%;
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

class LastSection extends Component {
    componentDidMount () {
        this.props.getContent("about/third-section");    
    }

    render () {
        const { color, content, isFetching, error} = this.props;        
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

        return (
        <SectionWrapper color={color}>
            <Section >
                <ImageContainer src= {content[0].image.secure_url} />
            </Section>

            <Section>
                <Wrapper>
                    
                    <h2>{content[0].contentTop.heading}</h2> 
                    <P margin="50px">{content[0].contentTop.text}</P>
                    <InternalLink text={content[0].contentTop.link.text} color={content[0].contentTop.link.color} href={content[0].contentTop.link.href} />
                    
                </Wrapper>               
            </Section>
        </SectionWrapper>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutThird
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(LastSection);

