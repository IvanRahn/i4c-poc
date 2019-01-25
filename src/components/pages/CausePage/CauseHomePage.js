import React, {Component} from "react";
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import {InternalLink} from "./../../modules";

class CauseHomePage extends Component {
    
    componentDidMount() {
        this.props.getContent("causes")
        
    }

    render () {
        console.log(this.props.cause)
        if(this.props.cause) {
            return (
                <div>
                    {this.props.cause.map(cause => {
                        
                        return(
                        <InternalLink key={cause._id} href={`cause/${cause.slug}`} text={cause.title} />)
                    })}

                </div>
            );
        } 
        
        return(
            "Helloaskld"
        )
    }
    
}


const mapStateToProps = (state) => {
    const {cause, causeIsFetching, causeError} = state.cause
    return {
      cause,
      causeIsFetching,
      causeError
    }
  }

export default connect(mapStateToProps, {getContent})(CauseHomePage);