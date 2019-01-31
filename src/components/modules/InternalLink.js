import styled from "styled-components";
import Link from "./Link"


const ButtonLink = styled(Link)`
    border-bottom: 3px solid ${props => props.color || "black"};
    display: inline-block;
    color: ${props => props.color || "black"};
    text-align: center;
    text-decoration: none;	
    ${props => props.auto ? "" : "width: 128px;"}
    margin: 8px 8px;
    /* height: 32px; */
    padding-bottom: 8px;
    font-size: 16px;
    :hover, :focus {
        color: blue;
    }
    `

    
// function StyledLink({className, section, text, location, color, to, auto}) {
    
//         return (
//         <ButtonLink 
//             className={className}
//             auto={auto} 
//             to={`${to}`} 
//             color={color}
//             location={location}
//             section={section}
//             >
//                 {text}
//         </ButtonLink>
//         )
//     }
  
export default ButtonLink;



