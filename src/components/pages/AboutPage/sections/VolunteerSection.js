import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, ProfileCard} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "./../../../modules"


const H = styled.h4`
    width:100%;
    text-align: left;
    margin-bottom: 88px;
`
const Container = styled.div`
width: 100%;
display: grid;
grid-row-gap: 24px;
grid-column-gap: 1%;
grid-template-columns: 100%;
@media only screen and (min-width: 500px){
    
grid-template-columns: 50% 50%;
}
@media only screen and (min-width: 960px) {
grid-template-columns: repeat(4, 25%);
} 
`
class VolunteerSection extends Component {

    componentDidMount () {
        const {content} = this.props;
        if(!content){
        this.props.getContent("about/volunteer-section");  
        }  
    }

    render() {
        const {content, isFetching, error} = this.props;
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

        return (
           <SectionWrapper 
           height="auto" 
           padding="52px 24px 72px 88px;"
           mobilePadding="52px 24px"
           >
                {/* Fix this up so that it is dynamic */}
                <H>Now we have volunteers:</H>
                <Container>
                {content.map((content) => {
                        return (
                            <ProfileCard
                            key={content._id} 
                            CardText={content.card.text}
                            CardImage={content.card.pageImage ? content.card.pageImage.secure_url : null}
                            CardHeading={content.card.heading}
                            position="flex-start"
                            />
                        )
                }) }
                </Container>

           </SectionWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutVolunteer
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(VolunteerSection);

