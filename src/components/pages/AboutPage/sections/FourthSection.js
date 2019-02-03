import React, {Component} from 'react';
import PageOpenerV2 from "../../../modules/pageLayout/PageOpenerV2";
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "../../../modules"



class FourthSection extends Component {
    componentDidMount () {
        this.props.getContent("about/last-section");
    }

    render () {
        const { content, isFetching, error} = this.props;
        console.log(content);       
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

            const information = [{heading: `<h2>${content[0].contentTop.heading}</h2>`, text: content[0].contentTop.text}];

            const link =[{linkText: content[0].link.text, linkColor: content[0].link.color, linkLocation: content[0].link.location }]
    

        return (
            <>
            <PageOpenerV2
            marginTop="0"
            image={content[0].image.secure_url}
            information= {information}
            link= {link}            
            >
                <></>
            </PageOpenerV2>
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

