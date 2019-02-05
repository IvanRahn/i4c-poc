import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Loading, MoreI4cCard} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';

const H = styled.h1`
width: 100%;
text-align: center;
`
class DonateSection extends Component {
    componentDidMount() {
        const {content} = this.props;
        if(!content){
        this.props.getContent("causes/homepage-card")
        }
    }
    render() {

        const {color, content, isFetching, error} = this.props;
        console.log(content)        
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        
        return (
            <>

            <SectionWrapper id="HowItWorks" color={color} height="auto" padding="52px 24px 52px" >
                {/* Fix this to be dynamic */}
                <H>Donate once, give forever</H>

                {content.map((content) => {
                        return (
                            <MoreI4cCard
                            key={content._id} 
                            CardText={content.text}
                            CardImage={content.image ? content.image.secure_url : null}
                            CardHeading={content.heading}
                            />
                        )
                }) }

            </SectionWrapper>
            </>
        )
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
})(DonateSection);
