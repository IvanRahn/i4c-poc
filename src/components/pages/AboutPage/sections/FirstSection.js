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

            const information = [{heading: `<h1>${content[0].contentTop.heading}</h1>`, text: content[0].contentTop.text}, {heading: `<h3>${content[0].contentBottom.heading}</h3>`, text: content[0].contentBottom.text}];

            const link =[{linkText: content[0].link.text, linkColor: content[0].link.color, linkLocation: content[0].link.location }]
        
        return (
            <>
                <PageOpenerV2
                information= {information}
                link= {link}
                image={content[0].image.secure_url}

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

