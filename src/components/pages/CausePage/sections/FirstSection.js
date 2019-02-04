import React, {Component} from 'react';
import PageOpener from '../../../modules/pageLayout/PageOpener';
import {Loading, HorizontalCardSection} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';


class FirstSection extends Component {

    componentDidMount () {
        this.props.getContent("causes/causeTopPage");
        this.props.getContent("causes/homepage-card");
    }

    render () {
        const { content, isFetching, error, cardContent, cardIsFetching, cardError} = this.props;
        console.log("Cardcontent", cardContent);
        if (isFetching || cardIsFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
            const information = [{heading: `<h1>${content[0].heading}</h1>`, text: content[0].text}];
        return (
            <PageOpener
            information= {information}
            image={content[0].image.secure_url}  
            breadcrumbs={[{to: "/", text: "homepage"}]}
            >
                <></>
                <HorizontalCardSection content={cardContent}/>
                <></>

            </PageOpener>
        )
    } 
}

const mapStateToProps = (state) => {
    console.log("STATE",state);
    const {content, isFetching, error} = state.causeHomePageFirstSection
    const {cardContent, cardIsFetching, cardError} = state.causeHomeCard

    return {
        content,
        isFetching,
        cardContent,
        cardIsFetching,
        cardError,
        error,
    }
}


export default connect(mapStateToProps, {
    getContent
})(FirstSection);

