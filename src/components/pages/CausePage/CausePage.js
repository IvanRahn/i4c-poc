import React, {Component} from 'react';
import {connect} from "react-redux";
import store from "./../../../store";

class CausePage extends Component {
    componentDidMount() {
    }

    render() {
        console.log('test', this.props.cause)
        // console.log('store', store.getState())
        const {color} = this.props;
        return (
           <>
               {this.props.cause.map(cause => {
                        
                    return(
                        <h1>{cause.title}</h1>
                    )
                })}
           </>
        )
    }
}

const mapStateToProps = () => {
    const {cause, causeIsFetching, causeError} = store.getState()
    return {
      cause,
      causeIsFetching,
      causeError
    }
}

export default connect(mapStateToProps)(CausePage);
