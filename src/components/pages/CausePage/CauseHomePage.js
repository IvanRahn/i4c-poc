import React, {Component} from "react";
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import {InternalLink} from "./../../modules";
import FirstSection from "./sections/FirstSection";
import DonateSection from "./sections/DonateSection";

class causesHomePage extends Component {
    
    componentDidMount() {
        this.props.getContent("causes")
        
    }

    render () {
        console.log(this.props.causes)
        if(this.props.causes) {
            return (
                <div>
                    <FirstSection />
                    <DonateSection  color="green"/>

                    {this.props.causes.map(causes => {
                        
                        return(
                        <InternalLink key={causes._id} to={`cause/${causes.slug}`} text={causes.title} />
                        )
                    })}

                </div>
            );
        } 
        
        return(
            <FirstSection />
        )
    }
    
}


const mapStateToProps = (state) => {
    const {causes, causesIsFetching, causesError} = state.causes
    return {
      causes,
      causesIsFetching,
      causesError
    }
  }

export default connect(mapStateToProps, {getContent})(causesHomePage);