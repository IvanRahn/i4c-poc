import styled from "styled-components";


const SectionWrapper = styled.section`
    height: ${props => props.height || "100vh"};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center; 
    background-color: ${props => props.color};
    @media only screen and (max-width: 499px) {
        height: auto;
    }
`

export default SectionWrapper;