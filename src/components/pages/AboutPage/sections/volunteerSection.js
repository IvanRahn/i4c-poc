import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/handshake.jpg';
import VolunteerCard from '../../../modules/VolunteerCard';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';

const Section = styled.div `
width: ${props => props.width || "50%"};
text-align: ${props => props.align || "center"};
height: 100%;
/* Add media query to make width 100% for mobile */
`
const H = styled.h1`
    width:100%;
    text-align: center;
`

class VolunteerSection extends Component {

    componentDidMount () {
        this.props.getContent("about/volunteer-section");    
    }

    render() {
        const { color, content, isFetching, error} = this.props;
        console.log(content)

        if (isFetching) {
            return (<div> loading</div>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

        return (
           <SectionWrapper height="auto">
                <H>Now we have volunteers</H>

                {content.map((content) => {
                        return (
                            <VolunteerCard
                            key={content._id} 
                            CardText={content.card.text}
                            CardImage={content.card.pageImage ? content.card.pageImage.secure_url : null}
                            CardHeading={content.card.heading}
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

