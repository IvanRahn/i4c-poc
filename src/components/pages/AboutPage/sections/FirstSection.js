import React, {Component} from 'react';
import {SectionWrapper, InternalLink, Card} from '../../../modules';
import PageOpenerV2 from '../../../modules/pageLayout/PageOpenerV2';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "./../../../modules"
import image from '../../../../img/handshake.jpg'


class FirstSection extends Component {

    componentDidMount () {
        this.props.getContent("about/first-section");    
    }

    render () {
        const { color, content, isFetching, error} = this.props;        
		console.log('TCL: FirstSection -> render -> content', content)
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            <>
                <PageOpenerV2
                heading="heading"
                image={image}
                text="always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment" 
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

