import React, {Component} from "react"; 
import styled from 'styled-components';
import SectionWrapper from "../HomePage/SectionWrapper";
import image from "./../../../img/cartoon.jpg";
import MoreI4cCard from '../../modules/MoreI4cCard';


 

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
        const {memberName, memberText, memberImage} = this.props;

        return (  

            <SectionWrapper>
                

                <ImageContainer src= {memberImage} />
                {memberName}
                {memberText}

            </SectionWrapper> 
        );
    }
}
 
export default BoardMembers;