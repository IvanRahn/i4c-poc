import React, {Component} from 'react';
import PageOpener from "../../../modules/pageLayout/PageOpener";
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "../../../modules"



class FourthSection extends Component {
    componentDidMount () {
        const {content} = this.props;
        if(!content){
        this.props.getContent("about/last-section");
        }
    }

    render () {
        const { content, isFetching, error} = this.props;
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

            const information = [{heading: `<h2>${content[0].contentTop.heading}</h2>`, text: content[0].contentTop.text}];

            const link =[{linkText: "Get to know our Board", linkColor: "black", linkLocation: "/board-page", linkSection: "About page fourth section" }]
    

        return (
            <>
            <PageOpener
            padding="0"
            marginTop="0"
            image={content[0].image.secure_url}
            information= {information}
            link= {link}            
            >
                <></>
            </PageOpener>
            </>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutLast
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(FourthSection);

