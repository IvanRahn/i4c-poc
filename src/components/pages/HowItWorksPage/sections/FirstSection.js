import React, {Component} from 'react';
import PageOpener from '../../../modules/pageLayout/PageOpener'; 
import {connect} from "react-redux"; 
import {getContent} from "./../../../../actions"
import {Loading, HorizontalCardSection, ImpactCard} from "./../../../modules"
import {brightGreen} from "../../../modules/BrandStyle";





class FirstSection extends Component {
    componentDidMount() {
        const body = document.querySelector("body");
        body.scrollTo(0, 0)
        const {content} = this.props;
        if(!content){
        this.props.getContent("howitworkshpfirstsection")
        }
        this.props.getContent("how-it-works-top-card")
    }


    
    render() { 
        const {content, error, isFetching, cardContent, cardIsFetching} = this.props; 
        if (isFetching || cardIsFetching) {
            return <Loading/>

        } else if (error || !content|| !content[0]){
            return <div>error</div>
        }

        const information = [{heading: `<h1>${content[0].mainHeading}</h1>`, text: content[0].mainText}, {heading: `<h3>${content[0].subHeading}</h3>`, text: content[0].subText}];

        const link =[{linkText: "DOWNLOAD PDF", linkColor: brightGreen, linkLocation: null, linkSection: "How it works page first section" }]

            return ( 
                <> 
                    <PageOpener 
                    padding = "0"
                    mobilePadding="0"
                    information={information} 
                    image={content[0].image.secure_url}
                    breadcrumbs={[{to: "/", text: "OUR APPOROACH"}]}
                    link={link}
                    >
                    
                    <>
                    {cardContent.map(content => {
                      return(  <ImpactCard
                        key={content.text}
                        display="desktop"
                        text={content.text}
                        image={content.image ? content.image.secure_url : null}
                        heading={content.heading}
                        />
                      )
                    })}
                    </>
                    <></>
                    <HorizontalCardSection display="mobile" content={cardContent} />
                    </PageOpener> 
                

                </>
            );
    }
}
 
const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.howItWorksTopPage 
    const {cardContent, cardIsFetching, cardError} = state.howItWorksTopCard
    
    
    return {
        content,
        isFetching,
        error,
        cardContent,
        cardIsFetching,
        cardError,
    }
}

export default connect(mapStateToProps, {getContent})(FirstSection);  