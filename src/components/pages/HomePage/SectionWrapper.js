import styled from "styled-components";

const SectionWrapper = styled.section`
height: 100vh;
 display: flex;
 justify-content: center;
 width: 100%;
 margin: 0 auto;
align-items: center; 
background-color: ${props => props.color}
`
export default SectionWrapper;