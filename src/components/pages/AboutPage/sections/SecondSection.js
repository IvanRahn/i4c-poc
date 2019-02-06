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
            
            const information = [{heading: `<h3>${content[0].contentTop.heading}</h3>`, text: content[0].contentTop.text}, {heading: `<h2>${content[0].contentMiddle.heading}</h2>`, text: content[0].contentMiddle.text}];
        return (
            <>
                <PageOpener
                marginTop="0"
                padding="0"
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

