import React, {Component} from 'react';
import {connect} from "react-redux";
import getContent from '../../../actions/keystoneActions';
import withTracker from '../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';
import MoreI4cCard from '../../modules/MoreI4cCard';

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
        console.log(this.props)
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
})(withRouter(withTracker(CausePage)));
