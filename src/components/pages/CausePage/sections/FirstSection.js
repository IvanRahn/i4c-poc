import React, {Component} from 'react';
import PageOpener from '../../../modules/pageLayout/PageOpener';
import {Loading} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';


class FirstSection extends Component {

    componentDidMount () {
        const {content} = this.props;
        if(!content){
        this.props.getContent("causes/causeTopPage");    
        }
    }

    render () {
        const { content, isFetching, error} = this.props;
        console.log("This page", content)       
        if (isFetching) {
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
            </PageOpener>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.causeHomePageFirstSection
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(FirstSection);

