import React, {Component} from 'react';
import PageOpener from '../../modules/pageLayout/PageOpener'; 
import {FeaturedCauseSection, HowItWorksSection, HeroArticleCard} 
from './../../modules'; 
import {darkGreen} from "./../../modules/BrandStyle"
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"
import {Loading} from "./../../modules" 
import image from "./../../../img/house.png"
import BoardMembers from '../OurBoardPage/BoardMembers';
import FirstSection from './sections/FirstSection';


class HowItWorksHomePage extends Component {
    componentDidMount() {

        this.props.getContent("storycause")

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
                    <FirstSection />
                    
                    


                    {/* <HowItWorksSection cardCount={6} color={darkGreen}/>
                    <FeaturedCauseSection cardCount={3}>
                    <HeroArticleCard
                    CardName={storycause[0].content.heading}
                    CardText={storycause[0].content.text} 
                    CardImage={storycause[0].image ? storycause[0].image.secure_url : null } 

                    />
                    </FeaturedCauseSection>  */}
                    

                

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

export default connect(mapStateToProps, {getContent})(HowItWorksHomePage);  




// TO DO : 
// CREATE TWO REDUCERES BoardMembersTOPPAGE REDUCER , AND HOWITWORKS TOP PAGE REDUCER 
// IMPLEMENT THEM TO THIER PERSPECTIVE HOME PAGES (BOARD HOME PAGE , HOW IT WORKS HOME PAGE) 
// AND PUT THEIR KEYS , THEN DO CONSTRUCTIVE DENOTATION   ex... content.image, content.text blah blah

