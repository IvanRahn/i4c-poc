import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, InternalLink, Card} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import image from "./../../../../img/placeholder_circle_profile_520x520.jpg"
import {Loading} from "./../../../modules"

const ImageContainer = styled.img`
width: 100%;
height: auto; 
position: relative;
top: 0;

@media (min-width: 500px){
    width: 670px;
    height: 500px; 
    position: relative;
    top: 0;
}
 
`

const Section = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: ${props => props.height || "auto"};
}
`
const Wrapper = styled.div`
text-align: left;
/* padding-right: 180px; */
padding: 48px;
margin-top: 200px;
`
const P = styled.p`
margin-bottom: ${props => props.margin || "0px"};

`
const BorderPMobile= styled.p`
color: white;
background-color: green;

@media (min-width: 500px){
    display: none;
}
`

const BorderP = styled.p`
display: none;

@media (min-width: 500px){
    display: block;
    color: white;
    background-color: green;
}

`

class FirstSection extends Component {

    componentDidMount () {
        this.props.getContent("about/first-section");    
    }

    render () {
        const { color, content, isFetching, error} = this.props;        
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            
            <SectionWrapper color={color} height= "auto" padding="0">
                <Section height="100%">
                    <BorderPMobile>Cause we care</BorderPMobile>
                    <ImageContainer src= {image} alt="Cherring man" />
                </Section>

                <Section>
                    <Wrapper>
                        <BorderP>Cause we care</BorderP>
                        <h1>We invest cause of blah</h1> 
                        <P margin="70px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
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

