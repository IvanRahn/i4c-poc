import React, {Component} from 'react';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "./../../../modules"
import PageOpener from "../../../modules/pageLayout/PageOpener";

class SecondSection extends Component {
    componentDidMount () {
        const {content} = this.props;
        if(!content){
        this.props.getContent("about/second-section"); 
        }   
    }

    render () {
        const { content, isFetching, error} = this.props;        
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
            
            const information = [{heading: `<h2>${content[0].contentTop.heading}</h2>`, text: content[0].contentTop.text}, {heading: `<h3>${content[0].contentMiddle.heading}</h3>`, text: content[0].contentMiddle.text}];
        return (
            <>
                <PageOpener
                padding="0"
                mobilePadding="0"
                marginTop="0"
                image={content[0].image.secure_url}
                information={information}
                >
                    <></>
                </PageOpener>
            </>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutSecond
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(SecondSection);

