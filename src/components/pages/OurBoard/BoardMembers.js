import React, {Component} from "react"; 
import styled from 'styled-components';
import HTMLContent from '../../modules/HTMLContent';




 

const ImageContainer = styled.img`
    display: flex;
    flex-direction: column;
    height: 220px;
    width: 220px;
    border-radius: 100%;
    margin: auto; 
    margin-right: 7em;
`


const DivStyle = styled.div`
    display: flex;
    margin: 1.5em 0 1.5em 0; 
    
`

const TextStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    
    
`



class BoardMembers extends Component { 
    render() { 
        const {memberName, memberHeading, memberText, memberImage} = this.props; 

        return (  
            
                <DivStyle>
                    
                        <ImageContainer src = {memberImage} /> 
                        <TextStyle>
                                {memberName}
                                {memberHeading}
                            <HTMLContent content={memberText} />
                            
                        </TextStyle>
            
                </DivStyle>
        );
    }
}
 


export default BoardMembers;