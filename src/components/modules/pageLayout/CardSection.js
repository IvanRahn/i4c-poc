import React, {Component} from 'react';
import styled from 'styled-components';
import SmallHorizontalCard from '../../modules/SmallHorizontalCard';
import {SectionWrapper} from '../../modules';
import image from '../../../img/placeholder_circle_profile_520x520.jpg';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    width: 390px;
`

class CardSection extends Component {
    componentDidMount () {
        this.props.getContent("causes/homepage-card");    
    }

    render() { 
        if(false){
            return (
                <SectionWrapper height="auto" padding="0 0 60px 0">
                    <Wrapper>
                        <SmallHorizontalCard CardText="Invesint for charity will do this blah" CardImage={image} /> 
                    </Wrapper>
                    <Wrapper>
                        <SmallHorizontalCard CardText="Invesint for charity will do this blah" CardImage={image} /> 
                    </Wrapper>
                    <Wrapper>
                        <SmallHorizontalCard CardText="Invesint for charity will do this blah" CardImage={image} /> 
                    </Wrapper>
                </SectionWrapper>
             );
            }
            return(null);
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
})(CardSection);