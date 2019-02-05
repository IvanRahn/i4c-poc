import React, {Component} from 'react';
import {HeroArticleCard} from '../../../modules'; 
import {connect} from "react-redux"; 
import {getContent} from "../../../../actions"
import {Loading} from "../../../modules" 



class FeatureSection extends Component {
    componentDidMount() {

        this.props.getContent("how-it-works/featured-cause")

    }
    render() {  
        const {featurecause, featurecauseError, featurecauseIsFetching} = this.props; 
        console.log("OVER HERE", featurecause)
        if (featurecauseIsFetching) {
            return <Loading/>

        } else if (featurecauseError || !featurecause|| !featurecause[0]){
            return <div>error</div>
        }
        
            return ( 
                <>  
                    <HeroArticleCard
                    CardName={featurecause[0].content.heading}
                    CardText={featurecause[0].content.text} 
                    CardImage={featurecause[0].image ? featurecause[0].image.secure_url : null } 
                    />
          
                </>
            );
    }
}
 
const mapStateToProps = (state) => {
    console.log("this one", state)
    const {featurecause, featurecauseIsFetching, featurecauseError} = state.howItWorksFeatureCause
    return {
        featurecause, 
        featurecauseIsFetching,
        featurecauseError

    }
}

export default connect(mapStateToProps, {getContent})(FeatureSection);  



