import React, {Component} from 'react';
import {connect} from "react-redux";
import getContent from '../../../actions/keystoneActions';
import withTracker from '../../google_analytics/withTracker';
import { Loading, ErrorBoundary} from "../../modules";
import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';
import LastSection from "../AboutPage/sections/LastSection"
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
            return <Loading/>
        } else if (causesError || !causes || !causes[0]) {
            return <div>Error</div>
        }
        const cause = causes.filter(cause => cause.slug === slug)[0] || null
        if (!cause) {   
            return 404
        }
        return (
            <ErrorBoundary>
                <FirstSection cause={cause}/>
                <SecondSection cause={cause}/>
                <ThirdSection cause={cause} />
                <LastSection/>
            </ErrorBoundary>
        )
            }
    }
const mapStateToProps = (state) => {
   
    const {causes, causesIsFetching, causesError} = state.cause
    return {
      causes,
      causesIsFetching,
      causesError
    }
}

export default connect(mapStateToProps, {
    getContent
})(CausePage);
