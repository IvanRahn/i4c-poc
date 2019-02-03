import React, {Component} from 'react';
import image from '../../../../img/handshake.jpg';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "./../../../modules"
import PageOpenerV2 from "../../../modules/pageLayout/PageOpenerV2";

class SecondSection extends Component {
    componentDidMount () {
        this.props.getContent("about/second-section");    
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
                <PageOpenerV2
                marginTop="0"
                image={content[0].image.secure_url}
                information={information}
                >
                    <></>
                </PageOpenerV2>
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

