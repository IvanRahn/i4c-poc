import React, {Component} from 'react';
import styled from 'styled-components';
import SmallHorizontalCard from '../../modules/SmallHorizontalCard';
import {SectionWrapper} from '../../modules';
import { getContent } from '../../../actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    width: 390px;
`

class CardSection extends Component {

    
    componentDidMount () {
        const {horizontalCardApi, getContent} = this.props; 
        getContent(horizontalCardApi);    
    }

    render() { 
        const { content, isFetching, error} = this.props;
        

        if (isFetching) {
            return ("loading")
            } else if (error || !content || !content[0]){
                return null
            }

        if(content){
            return (
                <SectionWrapper height="auto" padding="0 0 60px 0">
                    {content.map((content) => {
                    return (
                        <Wrapper key={content._id}>
                            <SmallHorizontalCard
                            CardText={content.text}
                            CardImage={content.image.secure_url}
                            />
                        </Wrapper>
                    )
                    }) }

                </SectionWrapper>
             );
            }
            return(null);
    }
}

const mapStateToProps = (state, props) => {
    const key = props.horizontalCardState
    const {content, isFetching, error} = state[key]
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(CardSection);