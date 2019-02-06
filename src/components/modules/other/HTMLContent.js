import React, {Component} from "react"
import {withRouter}from "react-router"
import styled from "styled-components";
import ReactGA from "react-ga";

const Div = styled.div `
   a {
    display: inline;
    color: ${props => props.color || "inherit"};
    border-bottom: 3px solid ${props => props.color || null};
    font-size: 1em;
    :hover {
        color: blue;
    }
  }
  margin: ${props => props.marginMobile || "0"};
  @media only screen and (min-width: 960px) {
  margin: ${props => props.margin || "0"};
  }
`
class HTMLContent extends Component {
    contentClickHandler = (e) => {
      const targetLink = e.target.closest('a');
      const {location} = this.props;
      const {history} = this.props
      if(!targetLink) return;
      if (targetLink.href.match(`${process.env.REACT_APP_LINK}`)) {
        console.log('TCL: HTMLContent -> contentClickHandler -> process.env.REACT_APP_LINK', process.env.REACT_APP_LINK)
        e.preventDefault();
        history.push(e.target.getAttribute("href"))
      } 
      const text = targetLink.innerHTML
      ReactGA.event({
        category: 'ButtonLink',
        action: `Section: "CMS content", Button: ${text}, Page: ${location.pathname}`,
      });
      return
    };
    
    render() {

      return (
        <Div 
          margin={this.props.margin}
          marginMobile={this.props.marginMobile}
          onClick={this.props.notClickable || this.contentClickHandler}
          dangerouslySetInnerHTML={{__html: this.props.content}} 
        />
      );
    }
  }

  export default withRouter(HTMLContent);