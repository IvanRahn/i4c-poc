import React, {Component} from "react"; 
import styled from 'styled-components';


 

const ImageContainer = styled.img`
    display: flex;
    flex-direction: column;
    height: 240px;
    width: 400px;
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
    
`


class BoardDutySection extends Component {
    
    render() { 
        const {dutyImage, boardQuote, boardRespons} = this.props;

        return (  
           
                <DivStyle>
                    <div>
                        <ImageContainer src= {dutyImage}/>
                    </div> 
                    <TextStyle>
                        <h3> {boardQuote} </h3> 
                        <h3> {boardRespons} </h3>
                    </TextStyle>
                </DivStyle>
          
        );
    }
}
 
export default BoardDutySection; 