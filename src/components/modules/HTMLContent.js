import React, {Component} from "react"
import {withRouter}from "react-router"
import styled from "styled-components";
import ReactGA from "react-ga";
import {brandBlack} from "./BrandStyle"

const Div = styled.div `
   a {
    border-bottom: 3px solid ${brandBlack};
    display: inline;
    color: ${props => props.color || "black"};
    text-align: center;
    text-decoration: none;	
    font-size: 1em;
    :hover {
        color: blue;
    }
  }
`
class HTMLContent extends Component {
    contentClickHandler = (e) => {
      const targetLink = e.target.closest('a');
      const {location} = this.props;
      const text = targetLink.innerHTML
      ReactGA.event({
        category: 'ButtonLink',
        action: `Section: "CMS content", Button: ${text}, Page: ${location.pathname}`,
      });
      const {history} = this.props
      if(!targetLink) return;
      if (targetLink.href.match(/localhost/)) {
          e.preventDefault();
          history.push(e.target.getAttribute("href"))
      } 
    };
    
    render() {

      return (
        <Div 
          onClick={this.contentClickHandler}
          dangerouslySetInnerHTML={{__html: this.props.content}} 
        />
      );
    }
  }

  export default withRouter(HTMLContent);