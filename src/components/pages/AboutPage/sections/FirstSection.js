import React, {Component} from 'react';
import PageOpener from '../../../modules/pageLayout/PageOpener';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading, ImpactCard} from "./../../../modules"
import {brightGreen} from "../../../modules/BrandStyle";



class FirstSection extends Component {

    componentDidMount () {
        const body = document.querySelector("body");
        body.scrollTo(0, 0)
        const {content, cardContent, getContent} = this.props;
        if(!content){
        getContent("about/first-section");    
        }
        if(!cardContent) {
        getContent("about/homepage-card")
        }
    }

    render () {
        const { content, isFetching, error, cardContent, cardIsFetching, cardError} = this.props;
        if (isFetching || cardIsFetching) {
            return (<Loading/>)
            } else if (error || cardError || !content || !content[0]){
                return <div>error</div>
            }

            const information = [{heading: `<h1>${content[0].contentTop.heading}</h1>`, text: content[0].contentTop.text}, {heading: `<h2>${content[0].contentBottom.heading}</h2>`, text: content[0].contentBottom.text}];

            const link =[{linkText: "DOWNLOAD PDF", linkColor: brightGreen, linkLocation: null, linkSection: "About page first section" }]
        return (
            <>
                <PageOpener
                padding="0 0 72px"
                mobilePadding="0"
                information= {information}
                link= {link}
                image={content[0].image ? content[0].image.secure_url: null}

                breadcrumbs={[
                {to: "/about", text:"ABOUT US"}
                ]}
                >
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
                    <></>
                    {cardContent.map(content => {
                      return(  <ImpactCard
                        key={content.text}
                        display="mobile"
                        text={content.text}
                        image={content.image ? content.image.secure_url : null}
                        heading={content.heading}
                        />
                      )
                    })}


                </PageOpener>
            </>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutFirst
    const {cardContent, cardIsFetching, cardError} = state.aboutCard

    return {
        content,
        isFetching,
        error,
        cardContent,
        cardIsFetching,
        cardError,
    }
}

export default connect(mapStateToProps, {
    getContent
})(FirstSection);

