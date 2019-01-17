import React, {Component} from "react"

class HTMLContent extends Component {
    contentClickHandler = (e) => {
      const {history} = this.props
      const targetLink = e.target.closest('a');
      if(!targetLink) return;
      if (targetLink.href.match(/localhost/)) {
          e.preventDefault();
          history.push(e.target.getAttribute("href"))
      } 
    };
    
    render() {

      return (
        <div 
          onClick={this.contentClickHandler}
          dangerouslySetInnerHTML={{__html: this.props.content}} 
        />
      );
    }
  }

  export default HTMLContent;