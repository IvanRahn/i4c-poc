import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Card} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "./../../../modules"


const H = styled.h1`
    width:100%;
`

class VolunteerSection extends Component {

    componentDidMount () {
        this.props.getContent("about/volunteer-section");    
    }

    render() {
        const {content, isFetching, error} = this.props;
        console.log(content)

        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

        return (
           <SectionWrapper height="auto" padding="52px 24px">
                <H>Now we have volunteers:</H>

                {content.map((content) => {
                        return (
                            <Card
                            key={content._id} 
                            CardText={content.card.text}
                            CardImage={content.card.pageImage ? content.card.pageImage.secure_url : null}
                            CardHeading={content.card.heading}
                            position="flex-start"
                            />
                        )
                }) }


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

