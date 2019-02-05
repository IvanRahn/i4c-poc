import React, {Component} from 'react';
import PageOpener from '../../../modules/pageLayout/PageOpener'; 
import {FeaturedCauseSection, HowItWorksSection, HeroArticleCard} 
from './../../../modules'; 
import {connect} from "react-redux"; 
import {getContent} from "./../../../../actions"
import {Loading} from "./../../../modules" 



class FirstSection extends Component {
    componentDidMount() {

        this.props.getContent("howitworkshpfirstsection")

    }
    render() { 
        const {content, error, isFetching} = this.props; 
        console.log("This is our content", content)

        if (isFetching) {
            return <Loading/>

        } else if (error || !content|| !content[0]){
            return <div>error</div>
        }

        const information = [{heading: `<h1>${content[0].contentTop.heading}</h1>`, text: content[0].contentTop.text}, {heading: `<h3>${content[0].contentBottom.heading}</h3>`, text: content[0].contentBottom.text}];

            return ( 
                <> 
                    <PageOpener
                    
                    >
                    
                    
                    
                    <>
                    </>
                    </PageOpener> 
                

                </>
            );
    }
}
 
const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.howItWorksTopPage
    console.log("This is the state", state)
    return {
        content,
        isFetching,
        error,
    }
}


export default connect(mapStateToProps, {getContent})(FirstSection);  




// TO DO : 
// CREATE TWO REDUCERES BoardMembersTOPPAGE REDUCER , AND HOWITWORKS TOP PAGE REDUCER 
// IMPLEMENT THEM TO THIER PERSPECTIVE HOME PAGES (BOARD HOME PAGE , HOW IT WORKS HOME PAGE) 
// AND PUT THEIR KEYS , THEN DO CONSTRUCTIVE DENOTATION   ex... content.image, content.text blah blah

