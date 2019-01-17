import React, {Component} from "react"; 
import styled from 'styled-components';
import SectionWrapper from "./SectionWrapper"; 
import ButtonLink from "./../../modules/ButtonLink"


const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 250px; 
max-height: 250px;
margin: 0 auto;
`


class CTASection extends Component {
    render() { 
        const {CTAText, CardImage} = this.props;
        console.log(CTAText);
        return (  
                <SectionWrapper>
                    <div>
                            <ImageContainer src= {CardImage} />

                        <div>
                            <p>"Our <ButtonLink text="qualified team"/> did the research, so you don't have to. The Australian charity sector holds over $30 billion dollars in cash reserves earning very low returns. A donation to I4C goes much further.</p>

                            <p>Most charities rely on regular donations to sustain their programs. <ButtonLink text="Join us" /> to make an everlasting impact.</p> 

                            <ButtonLink text="Vetted by our Board of Trustees" />
                        </div>

                    </div>
                    
                </SectionWrapper>
        );
    }
}
 
export default CTASection;