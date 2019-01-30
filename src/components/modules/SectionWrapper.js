import styled from "styled-components";


const SectionWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center; 
    padding: 52px 24px 0px;
    :last-of-type(a) {
        width: 100%;
    }
    background-color: ${props => props.color};
    height: ${props => props.height || "auto"};
    @media only screen and (min-width: 500px) {
    height: ${props => props.height || "100vh"};
    }
`

export default SectionWrapper;