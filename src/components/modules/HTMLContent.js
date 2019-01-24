import React, {Component} from "react"
import {withRouter}from "react-router"
import styled from "styled-components";
const Div = styled.div `
   a {
    border-bottom: 3px solid ${props => props.color || "black"};
    display: inline;
    color: ${props => props.color || "black"};
    text-align: center;
    text-decoration: none;	
    ${props => props.auto ? "" : "width: 128px;"}
    margin: 8px 8px;
    font-size: 1em;
    color: red;
    :hover {
        color: blue;
    }
  }
`
class HTMLContent extends Component {
    contentClickHandler = (e) => {
      const {history} = this.props
      console.log(this.props)
      const targetLink = e.target.closest('a');
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