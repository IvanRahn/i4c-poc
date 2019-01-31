import React, {Component} from 'react';
import styled from 'styled-components';
import SmallHorizontalCard from '../../modules/SmallHorizontalCard';
import {SectionWrapper} from '../../modules';
import image from '../../../img/placeholder_circle_profile_520x520.jpg';
import { getContent } from '../../../actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    width: 390px;
`

class CardSection extends Component {

    
    componentDidMount () {
        const {horizontalCard, getContent} = this.props; 
        getContent(horizontalCard);    
    }

    render() { 
        const { content, isFetching, error} = this.props;
        

        if (isFetching) {
            return ("loading")
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

        if(content){
            return (
                <SectionWrapper height="auto" padding="0 0 60px 0">
                    {content.map((content) => {
                    return (
                        <Wrapper key={content._id}>
                            <SmallHorizontalCard
                            CardText={content.text}
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

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.causeHomeCard
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(CardSection);