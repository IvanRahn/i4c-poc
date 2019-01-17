import React, {Component} from "react"; 
import styled from 'styled-components';
import SectionWrapper from "./SectionWrapper"; 
import ButtonLink from "./../../modules/ButtonLink"


const ImageContainer = styled.img`
height: 260px;
width: 540px;
margin: 0 auto;
margin-bottom: 30em; 
`

const Figure = styled.figure `
width: 80%;
margin: 0 auto;
`

const Section = styled.section `
width: 50%;
margin-right: 2em;
text-align: left;
`


class CTASection extends Component {
    render() { 
        const {CTAText, CardImage} = this.props;
        console.log(CTAText);
        return (  
                <SectionWrapper>
                    <Section> 
                    <Figure>
                            <ImageContainer src= {CardImage} />
                    </Figure>
                    </Section>

                    <Section>
                            <h1>"Our <ButtonLink text="qualified team"/> did the research, so you don't have to.</h1> 
                            <h3>The Australian charity sector holds over $30 billion dollars in cash reserves earning very low returns. A donation to I4C goes much further.</h3>

                            <h3>Most charities rely on regular donations to sustain their programs. <ButtonLink text="Join us" /> to make an everlasting impact.</h3> 

                            <ButtonLink text="Vetted by our Board of Trustees" />
                        
                    </Section>
                    
                </SectionWrapper>
        );
    }
}
 
export default CTASection;

