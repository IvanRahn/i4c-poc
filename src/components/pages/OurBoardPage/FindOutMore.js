import React, {Component} from 'react';
import styled from 'styled-components';
import {InternalLink, SectionWrapper} from './../../modules';
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions";
import {Loading} from "./../../modules";
import BrandStyle from "../../modules/BrandStyle";
import {brightGreen} from "../../modules/BrandStyle";



const Section = styled.div `
height: 50%;
width: ${props => props.width || "100%"};
text-align: center; 
margin: 0 auto;
padding: 0 0 70px; 
a{
color: green;
}
@media (min-width: 768px){
    width: 50%;
}
`


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
                <SectionWrapper>
                    <Section width="100%">
                        <h2>{findout[0].content.heading}</h2>
                        <InternalLink 
                        text="FIND OUT MORE" 
                        to="about"
                        color={brightGreen}
                        section="Out board page find out more section"
                        /> 
                    </Section> 
                </SectionWrapper>
                
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





















