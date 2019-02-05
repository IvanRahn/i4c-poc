import React, {Component} from 'react';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "../../../modules"
import BrandSection from "../../../modules/pageLayout/BrandSection";


class FourthSection extends Component {
    componentDidMount () {
        const {content} = this.props;
        if(!content){
            this.props.getContent("about/second-section");
        }
    }    

    render () {
        const { content, isFetching, error} = this.props;      
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

            const information = [{heading: `<h3>${content[0].contentBottom.heading}</h3>`, text: content[0].contentBottom.text}];

            const linkList =[{linkText: "SHOUT OUT1", linkColor: "black", linkLocation: "google", linkSection: "About page brand section" }, {linkText: "SHOUT OUT2", linkColor: "black", linkLocation: "google", linkSection: "About page brand section" }].filter(link => link.linkText);
        return (
            <>
                <BrandSection
                information = {information}
                link = {linkList}
                image1= {content[0].image_logos.image_logo1.secure_url}
                image2= {content[0].image_logos.image_logo2.secure_url}  
                />
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
})(FourthSection);

