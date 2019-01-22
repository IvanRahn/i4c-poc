import React, {Component} from "react";
import NavBar from '../../modules/NavBar';
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import ButtonLink from "./../../modules/ButtonLink";
import CausePage from "./CausePage";

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
                        <ButtonLink key={cause._id} href={`cause/${cause.slug}`} text={cause.title} />)
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