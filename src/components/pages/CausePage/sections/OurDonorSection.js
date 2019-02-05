import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Loading, HeroArticleCard, TreeSVG} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';



const H = styled.h1`
width: 100%;
text-align: center;
`
class OurDonorSection extends Component {
    componentDidMount() {
        const {content} = this.props;
        if(!content){
        this.props.getContent("causes/our-donor")
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
            <>
            <SectionWrapper 
            height="auto" 
            padding="52px 0 52px 0">
                <H>{content[0].pageHeading}</H>

                <HeroArticleCard 
                big 
                CardName={content[0].heading} 
                CardText={content[0].text} 
                CardImage={content[0].image.secure_url}/>
            </SectionWrapper>
                <TreeSVG color="green"/>
            </>

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
