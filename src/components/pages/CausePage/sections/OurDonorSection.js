import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Loading, HeroArticleCard} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';



const H = styled.h1`
width: 100%;
text-align: center;
`
class OurDonorSection extends Component {
    componentDidMount() {
        this.props.getContent("causes/our-donor")
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
            <SectionWrapper height="auto">
                <H>{content[0].pageHeading}</H>

                <HeroArticleCard heading={content[0].heading} text={content[0].text} image={content[0].image.secure_url}/>
            </SectionWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.causeOurDonorSection
    return {
        content,
        isFetching,
        error,
    }
}
export default connect(mapStateToProps, {
    getContent
})(OurDonorSection);
