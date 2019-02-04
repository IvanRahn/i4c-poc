import styled from "styled-components";
import Link from "./Link"


const ButtonLink = styled(Link)`
    border-bottom: 3px solid ${props => props.color || "black"};
    display: inline-block;
    color: ${props => props.color || "black"};
    text-align: center;
    text-decoration: none;	
    ${props => props.auto ? "" : "width: 128px;"}
    /* margin: 8px 8px; */
    margin: 0 8px  16px;
    /* height: 32px; */
    padding-bottom: 12px;
    font-size: 16px;
    :hover, :focus {
        color: blue;
    }
    `

  
export default ButtonLink;



