import React, {Component} from "react"; 
import styled from 'styled-components';
import {SectionWrapper, InternalLink, HTMLContent} from "../../../modules"
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';
import {Loading} from "./../../../modules"


const VideoContainer = styled.iframe`
margin: -128px auto 0 auto;
width: 100%;
height: auto;

@media only screen and (min-width: 500px){

width: 360px; 
/* height: 250px; */
margin: -300px auto 0 auto; 
}

`
const ImageContainer = styled.img`
width: 100%; 
height: auto;
margin: -128px auto 0 auto;
@media only screen and (min-width: 500px){
width: 360px;
margin: -300px auto 0 auto; 
}

`

const Section = styled.div `
width: 100%;
margin-right: 2em;
text-align: left;
@media only screen and (min-width: 500px) {
    width: 50%;

}
`


class TeamSection extends Component {
    componentDidMount() {
        this.props.getContent("teamSection")
    }
    render() { 
        const {teamSection, teamSectionError, teamSectionIsFetching} = this.props;
		console.log('TCL: TeamSection -> render -> teamSection', teamSection)
        if (teamSectionIsFetching) {
            return <Loading/>
        } else if (teamSectionError || !teamSection || !teamSection[0]) {
            return <div>error</div>
        }
        return (  
                <SectionWrapper height="auto">
                            {teamSection[0].media ? <VideoContainer src={teamSection[0].media} /> : <ImageContainer src={teamSection[0].image.secure_url} /> }
                            

                    <Section>
                            <h2>{teamSection[0].heading}</h2>
                            <HTMLContent content={teamSection[0].text}/>
                            <InternalLink text="Vetted by our \n Board of Trustees" />
                        
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

