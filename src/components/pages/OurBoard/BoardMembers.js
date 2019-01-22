import React, {Component} from "react"; 
import styled from 'styled-components';
import SectionWrapper from "../HomePage/SectionWrapper";


 

const ImageContainer = styled.img`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin: auto; 
    margin-right: 7em;
`





class BoardMembers extends Component { 
    render() { 
        const {cardHeading, cardText, avatar} = this.props; 

        return (  
            <SectionWrapper> 
                <ImageContainer cardImage = {avatar} />
                {cardHeading}
                {cardText}
            </SectionWrapper> 
        );
    }
}
 


export default BoardMembers;