import React, {Component} from 'react';
import styled from 'styled-components';
import {SmallHorizontalCard, ImpactStatsCard, } from '..';
import { getContent } from '../../../actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    width: auto;
    margin: 0 24px;
    display: ${props => props.display === "desktop" ? "none" : "block"};    
    @media only screen and (min-width: 768px) {
    display: ${props => props.display === "mobile" ? "none" : "block"}
    }
`
const Div = styled.div `
    display: flex;
    justify-content: center;
    width: auto;
    flex-wrap: wrap;
    margin: 0 auto;
@media only screen and (min-width: 768px){
}
`

class CardSection extends Component {
    render() { 
            const {content, display} = this.props
            console.log("PROPS", this.props)
            return (
                <>
               <Div>
                    {content.map((content) => {
                    return (
                        // <Wrapper display={display} key={content._id}>
                        //     <SmallHorizontalCard
                        //     CardText={content.text}
                        //     CardImage={content.image.secure_url}
                        //     mobile={this.props.mobile}
                        //     />
                        // </Wrapper>
                        <ImpactStatsCard/>
                    )
                    }) }
</Div>
                </>
             );
            }
}


export default CardSection;