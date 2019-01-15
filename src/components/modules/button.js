import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
width: 20px;

`


class Button extends Component {
    render() {
        const {ButtonText} = this.props; 
        return (
        <Link to="/">
        <StyledButton>{ButtonText}</StyledButton>
        </Link>
        )
    }
}   
export default Button;



