import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(Link)`
    border-bottom: 3px solid ${props => props.color || "black"};
    display: block;
    color: ${props => props.color || "black"};
    margin: 8px 8px;
    text-align: center;
    text-decoration: none;	
    width: 128px;
    height: 32px;
    font-size: 1.5em;
    :hover {
        color: blue;
    }
    `


class StyledLink extends Component {
    render() {
        console.log(this.props)
        const {color, text, href} = this.props
        // const {ButtonText} = this.props; 
        return (
        <ButtonLink to={`${href}`} color={color}>{text}</ButtonLink>
        )
    }
}   
export default StyledLink;



