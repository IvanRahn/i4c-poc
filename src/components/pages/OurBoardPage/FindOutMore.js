import React, {Component} from 'react';
import styled from 'styled-components';
import {InternalLink, SectionWrapper, CenteredContent} from './../../modules';
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions";
import {Loading} from "./../../modules";
import {brightGreen} from "../../modules/BrandStyle";


class FindOutMore extends Component {
    componentDidMount() {
        this.props.getContent("our-team/find-out-more")
    }
    
    render() { 
        const {findout, findoutError, findoutIsFetching} = this.props; 
        if (findoutIsFetching) {
            return <Loading/>

        } else if (findoutError || !findout|| !findout[0]){
            return <div>error</div>
        }     

            return (
                <CenteredContent
                secondHeading={findout[0].content.heading} 
                linkText="FIND OUT MORE" 
                linkColor={brightGreen} 
                linkLocation="about" 
                linkSection="Out board page find out more section"
                />
            )
                
    } 
}

const mapStateToProps = (state) => {
    const {findout, findoutIsFetching, findoutError} = state.findout
    return {
        findout, 
        findoutIsFetching,
        findoutError

    }
}

export default connect(mapStateToProps, {getContent})(FindOutMore);





















