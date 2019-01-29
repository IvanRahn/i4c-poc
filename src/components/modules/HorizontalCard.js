import React, {Component} from "react"; 
import styled from 'styled-components';
// import {HTMLContent} from '../../modules'; 


 

const ImageContainer = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 100%;
    margin: auto; 
    margin-right: 7em;
`


const DivStyle = styled.div`
    display: flex;
    height: 400px;
    width: 400px;
    /* margin: 1.5em 0 1.5em 0;  */
`

const TextStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;        
`



class HorizontalCard extends Component { 
    render() { 
        const {memberName, memberHeading, memberText, memberImage} = this.props; 

        return (  
            
                <DivStyle>
                    
                        <ImageContainer src = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" /> 
                        <TextStyle>
                            {/* <h1>Surname</h1>
                            <h2>position</h2> */}
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            {/* <HTMLContent content={memberText} /> */}
                        </TextStyle>
            
                </DivStyle>
        );
    }
}
 


export default HorizontalCard;