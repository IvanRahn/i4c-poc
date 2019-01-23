import React, {Component} from "react"; 
import styled from 'styled-components'; 



 

const ImageContainer = styled.img`
    display: flex;
    flex-direction: column;
    height: 265px;
    width: 430px;
    
    margin: auto; 
    margin-right: 10em;
`
const BreadCrumb = styled.text`
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 0rem;
  width: 32rem;
  background: green;
  color: white;
  border: 2px solid white;
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
                    <BreadCrumb> "ABOUT INVESTING FOR CHARITY LTD > BOARD OF TRUSTEES" </BreadCrumb>
                        <h3> {boardQuote} </h3> 
                        <h3> {boardRespons} </h3>
                    </TextStyle>
                </DivStyle>
          
        );
    }
}
 
export default BoardDutySection; 