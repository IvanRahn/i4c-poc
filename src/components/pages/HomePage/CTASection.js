import React, {Component} from "react"; 
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper"; 

class CTASection extends Component {
    render() { 
        const {CTAText} = this.props;
        return (  
                <SectionWrapper>

                    <CTASection>
                        <h1>{CTAText}</h1>
                            
                
            
                    
                    </CTASection>
                </SectionWrapper>
        );
    }
}
 
export default CTASection;