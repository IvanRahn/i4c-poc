import React, {Component} from 'react';
import {connect} from "react-redux";
import getContent from '../../../actions/keystoneActions';
import withTracker from '../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';
import PageOpener from '../../modules/pageLayout/PageOpenerV2';
import CardSection from "./../../modules/pageLayout/CardSectionV2"
import {CauseCard, InternalLink} from "./../../modules";
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
        console.log('TCL: CausePage -> render -> cause', cause)
        const impactList = Object.values(cause.impact)
		
        return (
           <>
           <PageOpener 
           heading={cause.topSection.heading}
           image={cause.topSection.image.secure_url}
           text={cause.topSection.text}
           breadcrumbs={[
            {to: "/cause", text:"Causes we care about"}, 
            {to: "#", text: cause.title}
            ]}
            >
            {/* always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment (<></>) */}
           <CardSection display="desktop" content={impactList}/>
           <CardSection content={impactList}/>
           <CardSection display="mobile" content={[{image: {secure_url:"asdfasdf"}, text: "qrqwerqwer"}]}/>
           </PageOpener>
            <CauseCard 
            key={cause._id}
            to={`cause/${cause.slug}`}
            CardHeading={cause.cardContent.heading} 
            CardText="always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " 
            >
            <ul>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
            </ul>
            <InternalLink text="asdfasDF" color="white"/>
            </CauseCard>
           </>
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
})(withRouter(withTracker(CausePage)));
