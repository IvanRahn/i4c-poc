import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper} from "../../../modules";
import { connect } from 'react-redux';
import HorizontalCard from '../../../modules/HorizontalCard';
import getContent from '../../../../actions/keystoneActions';
import {Loading} from "./../../../modules"



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
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            <SectionWrapper height="auto">
                <H>Our Donors/ Charity Stories</H>

                <HorizontalCard />
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
