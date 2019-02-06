import styled from "styled-components";
import {darkGreen} from "./../BrandStyle"
import React from "react";

const BackgroundSection = styled.section`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justify || "center"};
    width: 100%;
    margin: 0 auto;
    align-items: ${props => props.align || "center"};  */
    /* position: relative; */
    /* padding: ${props => props.mobilePadding || "52px 24px 0px"};
    :last-of-type(a) {
        width: 100%;
    } */
    background-color: ${props => props.color ? darkGreen : "#ffffff" };
        /* height: ${props => props.height || "auto"};
    @media only screen and (min-width: 760px) {
    padding: ${props => props.padding || "52px 24px 0px"};
        height: ${props => props.height || "100vh"};
    } */
`
const Root = styled.div `
    display: flex;

max-width: 1200px;

flex-wrap: wrap;
    justify-content: ${props => props.justify || "center"};
    width: 100%;
    margin: 0 auto;
    align-items: ${props => props.align || "center"}; 
    position: relative;
    padding: ${props => props.mobilePadding || "52px 24px 0px"};
    :last-of-type(a) {
        width: 100%;
    }
    height: ${props => props.height || "auto"};
    @media only screen and (min-width: 760px) {
    padding: ${props => props.padding || "52px 24px 0px"};
        height: ${props => props.height || "100vh"};
    }
`
const SectionWrapper = (props) => {
    return (
        <BackgroundSection color={props.color}>
        <Root {...props}>
            {props.children}
        </Root>
        </BackgroundSection>
    )
}

export default SectionWrapper;