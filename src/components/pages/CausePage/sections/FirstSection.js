import React, {Component} from 'react';
import PageOpener from '../../../modules/pageLayout/PageOpenerV2';
import {Loading} from '../../../modules';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';


class FirstSection extends Component {

    componentDidMount () {
        this.props.getContent("about/first-section");    
    }

    render () {
        const { content, isFetching, error} = this.props;        
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            <PageOpener />
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutFirst
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(FirstSection);

