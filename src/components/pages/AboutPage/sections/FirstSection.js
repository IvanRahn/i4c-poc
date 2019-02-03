import React, {Component} from 'react';
import PageOpenerV2 from '../../../modules/pageLayout/PageOpenerV2';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "./../../../modules"



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
            <>
                <PageOpenerV2
                heading={content[0].contentTop.heading}
                image={content[0].image.secure_url}
                text={content[0].contentTop.text}
                secondHeading={content[0].contentBottom.heading}
                secondText={content[0].contentBottom.text}
                firstLinkText={content[0].link.text}
                firstLinkColor={content[0].link.color} 
                firstLinkLocation={content[0].link.location}

                breadcrumbs={[
                {to: "/cause", text:"Causes we care about"}, 
                {to: "#", text: "Hello"}
                ]}
                >
                    <></>
                </PageOpenerV2>
            </>
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

