import React, {Component} from 'react';
import PageOpenerV2 from "../../../modules/pageLayout/PageOpenerV2";
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "../../../modules"
import image from '../../../../img/handshake.jpg';


class LastSection extends Component {
    componentDidMount () {
        this.props.getContent("about/second-section");
    }

    render () {
        const { content, isFetching, error} = this.props;
        console.log("Over here", content)        
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

        return (
            <>
            <PageOpenerV2
            marginTop="0"
            secondHeading="heading"
            image={image}
            secondText="always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment" 
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
})(LastSection);

