import React, {Component} from "react"; 
import styled from 'styled-components';
import {SectionWrapper, InternalLink, HTMLContent} from "../../../modules"
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';
import {Loading} from "./../../../modules"


const VideoContainer = styled.iframe`
width: 100%; 
height: auto;
margin-bottom: 24px;
@media only screen and (min-width: 768px) {
    width: 40%;
    margin: -300px auto 0 auto; 

}
@media only screen and (min-width: 960px) {
width: 360px;
margin: -360px auto 0 auto; 
}

`
const ImageContainer = styled.img`
width: 100%; 
height: auto;
margin-bottom: 24px;
@media only screen and (min-width: 768px) {
    width: 40%;
    margin: -300px auto 0 auto; 

}
@media only screen and (min-width: 960px) {
width: 360px;
margin: -360px auto 0 auto; 
}

`

const Section = styled.div `
width: 100%;
margin-right: 2em;
text-align: left;
@media only screen and (min-width: 768px) {
    width: 50%;

}
`
const H2 = styled.h2 `

`

class TeamSection extends Component {
    componentDidMount() {
        const {teamSection} = this.props
        if (!teamSection) {
        this.props.getContent("teamSection")
        }
    }
    render() { 
        const {teamSection, teamSectionError, teamSectionIsFetching} = this.props;
        if (teamSectionIsFetching) {
            return <Loading/>
        } else if (teamSectionError || !teamSection || !teamSection[0]) {
            return <div>error</div>
        }
        return (  
                <SectionWrapper 
                height="auto"
                padding="52px 0 72px"
                mobilePadding="0 24px 48px"
                >
                            {teamSection[0].media ? <VideoContainer src={teamSection[0].media} /> : <ImageContainer src={teamSection[0].image.secure_url} /> }
                    <Section>
                            <H2>{teamSection[0].heading}</H2>
                            <HTMLContent 
                            margin="0 0 48px"
                            marginMobile="0 0 48px"
                            content={teamSection[0].text}/>
                            <InternalLink 
                            textLeft 
                            width="auto" 
                            text="Vetted by our Board of Trustees" />
                    </Section>
                    
                </SectionWrapper>
        );
    }
}
const mapStateToProps = (state) => {
    const {teamSection, teamSectionIsFetching, teamSectionError} = state.teamSection
    return {
        teamSection,
        teamSectionIsFetching,
        teamSectionError,
    }
}
export default connect(mapStateToProps, {
    getContent
})(TeamSection);

