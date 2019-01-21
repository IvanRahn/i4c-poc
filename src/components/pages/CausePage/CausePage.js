import React, {Component} from 'react';
import {connect} from "react-redux";
import store from "./../../../store";

class CausePage extends Component {
    componentDidMount() {
    }

    render() {
        console.log('test', this.props)
        // console.log('store', store.getState())
        const {color} = this.props;
        const {slug} = this.props.match.params
        const cause = this.props.cause.cause.filter(cause => cause.slug === slug)[0]
        console.log("Cause: ", cause)
        console.log("Slug", slug)
        return (
           <>
               <h1>{cause.pageContent.heading}</h1>

               <p>{cause.pageContent.text}</p>
           </>
        )
    }
}

const mapStateToProps = () => {
    //Add in an function to check if the state is in the store if not fire an action and using the slug to filter down.
    const {cause, causeIsFetching, causeError} = store.getState()
    return {
      cause,
      causeIsFetching,
      causeError
    }
}

export default connect(mapStateToProps)(CausePage);
