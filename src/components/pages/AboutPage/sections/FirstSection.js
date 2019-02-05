import React, {Component} from 'react';
import PageOpener from '../../../modules/pageLayout/PageOpener';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading, HorizontalCardSection, ImpactCard} from "./../../../modules"



class FirstSection extends Component {

    componentDidMount () {
        const {content} = this.props;
        if(!content){
        this.props.getContent("about/first-section");    
        }
        this.props.getContent("about/homepage-card")
    }

    render () {
        const { content, isFetching, error, cardContent, cardIsFetching, cardError} = this.props;
        console.log("CardCONTENT",cardContent)        
        if (isFetching || cardIsFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

            const information = [{heading: `<h1>${content[0].contentTop.heading}</h1>`, text: content[0].contentTop.text}, {heading: `<h3>${content[0].contentBottom.heading}</h3>`, text: content[0].contentBottom.text}];

            const link =[{linkText: "DOWNLOAD PDF", linkColor: "green", linkLocation: null, linkSection: "About page first section" }]
        
        return (
            <>
                <PageOpener
                padding="0 0 72px"
                information= {information}
                link= {link}
                image={content[0].image.secure_url}

                breadcrumbs={[
                {to: "/about", text:"about"}
                ]}
                >
                    <>
                    {cardContent.map(content => {
                      return(  <ImpactCard
                        key={content.text}
                        display="desktop"
                        text={content.text}
                        image={content.image.secure_url}
                        heading={content.heading}
                        />
                      )
                    })}
                    </>
                    <></>
                    <HorizontalCardSection display="mobile" content={cardContent} />


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

