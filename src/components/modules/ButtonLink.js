import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(Link)`
    border-bottom: 2px solid ${props => props.color || "black"};
    display: block;
    color: ${props => props.color || "black"};
    margin: 8px 8px;
    text-align: center;
    text-decoration: none;	
    ::visited {
        color: ${props => props.color || "black"};
    }
    width: 128px;

`


class StyledLink extends Component {
    render() {
        const {color, text} = this.props
        // const {ButtonText} = this.props; 
        return (
        <ButtonLink to="/" color={color}>{text}</ButtonLink>
        )
    }
}   
export default StyledLink;



