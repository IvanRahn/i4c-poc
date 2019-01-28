import React, {Component} from "react"; 
import styled from 'styled-components';
import {SectionWrapper, InternalLink, HTMLContent} from "../../../modules"
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';

const ImageContainer = styled.iframe`
width: 250px; 
height: 250px;
margin: -50px auto 0 auto;
@media only screen and (min-width: 500px){

margin: -600px auto 0 auto; 
}

`

const Section = styled.div `
width: 50%;
margin-right: 2em;
text-align: left;
`


class TeamSection extends Component {
    componentDidMount() {
        this.props.getContent("teamSection")
    }
    render() { 
        const {teamSection, teamSectionError, teamSectionIsFetching} = this.props;
        if (teamSectionIsFetching) {
            return <div>Loading</div> 
        } else if (teamSectionError || !teamSection || !teamSection[0]) {
            return <div>error</div>
        }
        return (  
                <SectionWrapper height="50vh">
                            <ImageContainer src={teamSection[0].media} />

                    <Section>
                            <HTMLContent content={teamSection[0].heading}/>
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

