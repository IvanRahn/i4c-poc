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
        
        return (
            <>
                <PageOpenerV2
                marginTop="0"
                image={content[0].image.secure_url}
                secondHeading={content[0].contentTop.heading}
                secondText={content[0].contentTop.text}
                thirdHeading={content[0].contentMiddle.heading}
                thirdText={content[0].contentMiddle.text}
                fourthHeading={content[0].contentBottom.heading}
                fourthText={content[0].contentBottom.text}
                firstLinkText={content[0].linksBottom.link.text}
                firstLinkColor={content[0].linksBottom.link.color}
                firstLinkLocation={content[0].linksBottom.link.href}
                secondLinkText={content[0].linksBottom.link2.text}
                secondLinkColor={content[0].linksBottom.link2.color}
                secondLinkLocation={content[0].linksBottom.link2.href}
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

