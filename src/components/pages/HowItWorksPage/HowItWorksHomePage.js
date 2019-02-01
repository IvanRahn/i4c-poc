import React, {Component} from 'react';
import PageOpener from '../../modules/pageLayout/PageOpener'; 
import {SmallHorizontalCard, FeaturedCauseSection, HowItWorksSection, StoryCause} 
from './../../modules/'; 
import {darkGreen} from "./../../modules/BrandStyle"
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"
import {Loading} from "./../../modules" 
import image from "./../../../img/house.png"


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
                    <PageOpener 
                    heading="Blah"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                    image={image}  
                    link="yo" 
                    horizontalCard= "howitworkshomepagecard" /> 


                    <HowItWorksSection cardCount={6} color={darkGreen}/>
                    <FeaturedCauseSection cardCount={3}>
                    <StoryCause 
                    CardName={storycause[0].content.heading}
                    CardText={storycause[0].content.text} 
                    CardImage={storycause[0].image ? storycause[0].image.secure_url : null } 

                    />
                    </FeaturedCauseSection> 
                    

                

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

