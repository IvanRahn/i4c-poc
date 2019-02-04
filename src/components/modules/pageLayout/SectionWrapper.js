import styled from "styled-components";
import {darkGreen, brandWhite} from "./../BrandStyle"

const SectionWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justify || "center"};
    width: 100%;
    margin: 0 auto;
    align-items: ${props => props.align || "center"}; 
    position: relative;
    padding: ${props => props.padding || "52px 24px 0px"};
    :last-of-type(a) {
        width: 100%;
    }
    background-color: ${props => props.color ? darkGreen : "#ffffff" };
        height: ${props => props.height || "auto"};
    @media only screen and (min-width: 500px) {
        height: ${props => props.height || "100vh"};
    }
`

export default SectionWrapper;