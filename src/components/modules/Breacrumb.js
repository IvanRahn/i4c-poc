import React from 'react';
import styled from "styled-components";
import Link from "./Link"

const StyledBreadcrumb = styled.span`
display: ${props => props.mobile ? "flex" : "none"};
position: absolute;
width: 100%;
z-index: 1;
justify-content: center;
a {
    padding: 4px 8px;
    color: white;
    background-color: green;
    :hover, :focus {
    cursor: pointer;
    }
}
@media (min-width: 500px){
    display: ${props => props.mobile ? "none" : "inline"};
    color: white;
    width: auto;
}
`
const Breadcrumb = ({text, to, mobile}) => {
    return (
        <StyledBreadcrumb mobile={mobile}>
            <Link to={to}>{text}</Link>
        </StyledBreadcrumb>
    )
}


export default Breadcrumb

