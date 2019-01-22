import React, {Component} from "react"; 
import styled from 'styled-components';
import HTMLContent from '../../modules/HTMLContent';




 

const ImageContainer = styled.img`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin: auto; 
    margin-right: 7em;
`


const DivStyle = styled.div`
    display: flex;
    
`

const TextStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    color: white;
    
`



class BoardMembers extends Component { 
    render() { 
        const {memberName, memberHeading, memberText, memberImage} = this.props; 

        return (  
            
                <DivStyle>
                    <div>
                        <ImageContainer src = {memberImage} /> 
                        <TextStyle>
                                {memberName}
                                {memberHeading}
                            <HTMLContent content={memberText} />
                            
                        </TextStyle>
                    </div>
                </DivStyle>
        );
    }
}
 


export default BoardMembers;