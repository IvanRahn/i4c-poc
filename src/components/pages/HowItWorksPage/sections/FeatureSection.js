import React, {Component} from 'react';
import {HeroArticleCard} from '../../../modules'; 
import {connect} from "react-redux"; 
import {getContent} from "../../../../actions"
import {Loading} from "../../../modules" 



class StorySection extends Component {
    componentDidMount() {

        this.props.getContent("how-it-works/featured-cause")

    }
    render() {  
        const {storycause, storycauseError, storycauseIsFetching} = this.props; 
        if (storycauseIsFetching) {
            return <Loading/>

        } else if (storycauseError || !storycause|| !storycause[0]){
            return <div>error</div>
        }
        
            return ( 
                <>  
                    <HeroArticleCard
                    CardName={storycause[0].content.heading}
                    CardText={storycause[0].content.text} 
                    CardImage={storycause[0].image ? storycause[0].image.secure_url : null } 
                    />
          
                </>
            );
    }
}
 
const mapStateToProps = (state) => {
    const {storycause, storycauseIsFetching, storycauseError} = state.storycause
    return {
        storycause, 
        storycauseIsFetching,
        storycauseError

    }
}

export default connect(mapStateToProps, {getContent})(StorySection);  



