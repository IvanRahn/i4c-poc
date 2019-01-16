import React, {Component, lazy} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga";

const ButtonLink = styled(Link)`
    border-bottom: 3px solid ${props => props.color || "black"};
    display: inline-block;
    color: ${props => props.color || "black"};
    text-align: center;
    text-decoration: none;	
    ${props => props.auto ? "" : "width: 128px;"}
    /* width: auto; */
    margin: 8px 8px;
    height: 32px;
    font-size: 1em;
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
        const {color, text, href, auto} = this.props
        return (
        <ButtonLink auto={auto} to={`${href}`} color={color} onClick={this.analytics}>{text}</ButtonLink>
        )
    }
}   
export default StyledLink;



