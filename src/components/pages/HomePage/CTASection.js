import React, {Component} from "react"; 
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper"; 

class CTASection extends Component {
    render() { 
        const {color} = this.props;
        return (  
            <SectionWrapper color= {color} />
        );
    }
}
 
export default CTASection;