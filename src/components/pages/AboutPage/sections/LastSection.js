import React, {Component} from 'react';
import {CenteredContent} from '../../../modules';
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
        console.log(content);       
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

        return (
            <>
                <CenteredContent secondHeading={content[0].contentBottom.heading} linkText="LEARN HOW IT WORKS" linkColor="green" linkLocation="how-it-works" linkSection="About page last section"/>
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

