import React, { Component } from "react";  
import styled from "styled-components";




class HowitWorksCard extends Component {

    render() { 
        const {cardHeading, cardText } = this.props
        
        return (
            <div>
                <div className = "card">
                    <img href="/" alt= "avatar" src= "" />
                </div>   
                <ol className = "content">
                    <li>
                        <h1>{cardHeading}</h1> 
                        <h3>{cardText}</h3>
                        <h3>{cardText}</h3>
                    </li>
                </ol>  
            </div>  
        );
    }
}
 
export default HowitWorksCard;