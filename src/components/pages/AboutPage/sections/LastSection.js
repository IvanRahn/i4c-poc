import React, {Component} from 'react';
import CenteredContent from '../../../modules/CenteredContent';
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
                <CenteredContent secondHeading={content[0].contentBottom.heading} linkText={content[0].contentBottom.link.text} linkColor={content[0].contentBottom.link.color} linkLocation={content[0].contentBottom.link.href} />
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

