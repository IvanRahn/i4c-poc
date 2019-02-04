import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Loading, HeroArticleCard} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';



const H = styled.h1`
width: 100%;
text-align: center;
/* margin-top: 120px; */
`
class OurDonorSection extends Component {
    componentDidMount() {
        this.props.getContent("HOWITWORKSSTEPS")
    }
    render() {

        const { color, content, isFetching, error} = this.props;        
        if (false) {
            return (<Loading/>)
            // } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            <SectionWrapper height="auto">
                <H>Our Donors/ Charity Stories</H>

                <HeroArticleCard CardHeading="This is the heading" CardText="<p>This is some text</p>"/>
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
})(OurDonorSection);
