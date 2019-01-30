import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, InternalLink, Card} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';


const ImageContainer = styled.img`
height: auto; 
position: relative;
top: 0;
width: 100%; 
`

const Section = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
}
`
const Wrapper = styled.div`
text-align: left;
/* padding-right: 180px; */
padding: 48px;
`
const P = styled.p`
margin-bottom: ${props => props.margin || "0px"};

`

const BorderP = styled.p`
color: white;
background-color: green;
`

class JoinSection extends Component {

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
            
            <SectionWrapper color={color} height= "auto" padding="0">
                <Section>
                    <ImageContainer src= "http://writingexercises.co.uk/images2/randomimage/sandy-boots.jpg" alt="Cherring man" />
                    <h1>Investing for charity</h1>
                </Section>

                <Section>
                    <h2>All this works because of our Donors.</h2>
                               
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
})(JoinSection);

