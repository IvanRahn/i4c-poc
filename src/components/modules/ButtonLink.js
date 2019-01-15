import React, {Component, lazy} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga";

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
    analytics = () => {
        
        const {section, text, location} = this.props;
        ReactGA.event({
            category: 'ButtonLink',
            action: `Section: ${section}, Button: ${text}, Page: ${location.pathname}`,
          });
    }
    render() {
        const {color, text, href} = this.props
        return (
        <ButtonLink to={`${href}`} color={color} onClick={this.analytics}>{text}</ButtonLink>
        )
    }
}   
export default StyledLink;



