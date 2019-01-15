import React, {Component} from "react";
import Link from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`

`


class Button extends Component {
    render() {
        return (
        <Link to="/">
        <StyledButton />
        </Link>
        )
    }
}   
export default Button;

