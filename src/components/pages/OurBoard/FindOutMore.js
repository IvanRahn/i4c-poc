import React, { Component } from "react";
import styled from 'styled-components';
import {InternalLink} from "./../../modules";


const DivTextStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center; 
    font-size:20px;
` 





class FindOutMore extends Component {
    
    render() { 
        const {message} = this.props;
        return (  
            <DivTextStyle>
                {message}
                <InternalLink text="FIND OUT MORE" color={"green"} href="#" />                
            </DivTextStyle>
        );
    }
}
 
export default FindOutMore;
