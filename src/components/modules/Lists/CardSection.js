import React, {Component} from 'react';
import styled from 'styled-components';
import {SmallHorizontalCard} from '..';
import { getContent } from '../../../actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    width: 200px;
    display: ${props => props.display === "desktop" ? "none" : "block"};    
    @media only screen and (min-width: 768px) {
    display: ${props => props.display === "mobile" ? "none" : "block"}
    }
`

class CardSection extends Component {
    render() { 
            const {content, display} = this.props
            console.log("PROPS", this.props)
            return (
                <>
               
                    {content.map((content) => {
                    return (
                        <Wrapper display={display} key={content._id}>
                            <SmallHorizontalCard
                            CardText={content.text}
                            CardImage={content.image.secure_url}
                            mobile={this.props.mobile}
                            />
                        </Wrapper>
                    )
                    }) }

                </>
             );
            }
}


export default CardSection;