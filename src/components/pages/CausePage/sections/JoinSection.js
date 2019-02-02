import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, InternalLink, Loading} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';

const Section = styled.div `
width: ${props => props.width || "100%"};
align-items: center;
color: white;
@media (min-width: 768px){
    width: 50%;
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || null};
}
`
const Svg = styled.svg`
    display: none;

    @media only screen and (min-width: 500px) {
        display: block;
        height: 60px;
        width: 70px;
    }


    path{
        fill: white;
    }
`

class JoinSection extends Component {

    componentDidMount () {
        this.props.getContent("");    
    }

    render () {
        const { color, content, isFetching, error} = this.props;        
        if (false) {
            return (<Loading/>)
            // } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            
            <SectionWrapper color="green" height= "auto" padding="28px 16px 64px 16px">
                <Section justify="flex-end">
                <Svg>
                <path d="M30.5,24.1c0.1-2.8-2.2-9.8-2.2-9.8c0.7,0.1,5.2,6.8,4.7,9.6l0,0c4.3-1,7.3-5.1,6.7-9.5l-0.1-0.6
                    c-1-7.4-9.3-12.2-9.7-12.4l-0.9-0.5l-0.8,0.7c-0.3,0.2-5.7,5.5-6.3,11.8c-0.1,0.8-0.1,1.7,0,2.5l0.1,0.6c0.1,0.7,0.3,1.3,0.5,1.9
                    c-5.9-3.5-13.6-2.4-14-2.3l-1.1,0.2l-0.1,1.1c0,0.4-0.5,8.6,3.5,14.4c0.5,0.8,1.1,1.5,1.8,2.1l0.5,0.5c2.8,2.6,6.5,3.3,9.7,2.2
                    c0.3-0.1,0.7-0.3,0.9-0.6l0.1-0.1c0.7-0.6,1-1.5,0.8-2.5c-0.4-2.7-6.8-7.3-6.8-7.3c0.6-0.3,8,2.8,9,5.4c0,0.1,0,0.1,0.1,0.2
                    c0.2,0.7,0.3,1.5,0.3,2.3l-0.2,13.4l-2.3,0c-4.4,0.4-8.7,1.4-12.8,3.1c-1,0.4-2,1-3.2,1.7c0,0,0,0,0,0l0,0c0.1,0.1,0.2,0.1,0.2,0.2
                    c0.5,0.4,0.9,0.8,1.3,1.1c1.1,0.8,2.3,1.5,3.5,2.1c4.3,2.3,9.2,3.7,14.6,3.7c5.3,0,10.4-1.4,14.8-3.8c1.9-0.9,3.7-2,5.4-3.6
                    c0,0,0.1-0.1,0.1-0.1l0,0c0,0,0,0,0,0c-3.2-2-6.6-3.1-10.1-3.8c-1.9-0.4-3.9-0.4-5.8-0.7l-2.8,0.1l0.1-7.4c1.1,2.4,3.3,4.3,6.1,4.8
                    l0.6,0.1c0.8,0.2,1.7,0.2,2.5,0.2c6.3-0.1,12-5.1,12.3-5.3l0.8-0.7l-0.4-1c-0.2-0.4-4.3-9.1-11.6-10.6l-0.6-0.1
                    c-2.7-0.6-5.5,0.3-7.4,2c3.1,0.9,7.3,4.1,7.4,4.7c0,0-6.4-2.8-9.3-2.3c0,0,0,0.1-0.1,0.1L30.5,24.1z"/>
                </Svg>
                <h1>Investing for charity</h1>
                </Section>

                <Section direction="column">
                    <h2>All this works because of our Donors.</h2>
                    <InternalLink text="Join the cause" color="white" />
                               
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

