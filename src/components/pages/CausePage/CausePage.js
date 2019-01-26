import React, {Component} from 'react';
import {connect} from "react-redux";
import store from "./../../../store";
import getContent from '../../../actions/keystoneActions';

class CausePage extends Component {
    componentDidMount() {
        const {causes, getContent} = this.props;
        if (!causes) {
            getContent("causes")
        }
    }

    render() {
        const {slug} = this.props.match.params
        const {causes, causesError, causesIsFetching} = this.props
        if (causesIsFetching) {
            return <div>Loading</div>
        } else if (causesError || !causes || !causes[0]) {
            return <div>Error</div>
        }
        const cause = causes.filter(cause => cause.slug === slug)[0]
        
        return (
           <>
               <h1>{cause.pageContent.heading}</h1>

               <p>{cause.pageContent.text}</p>
           </>
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

export default connect(mapStateToProps, {
    getContent
})(CausePage);
