import React, {Component} from "react"; 
import styled from "styled-components";
import {InternalLink} from "./index"; 
import Disclaimer from "./Disclaimer";
const FooterStyling = styled.footer`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: 24px;
    @media only screen and (min-width:500px) {
    flex-direction: row;
    justify-content: space-evenly;
    }
    div {
        display: inherit;
        flex-direction: column;
       


    }
    a {
        align-self: flex-end;
    }
    h3 {
        text-align: left;
    }
`

const UnorderedListStyling = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    @media only screen and (min-width:500px) {
            flex-direction: row;
        }
`

// "JOIN US" button style : 
// align-self: flex-end;

class Footer extends Component {
    render() { 
        
        return (  
            <>
            <FooterStyling>
                
                <div>
                    <h3>ABOUT US</h3>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "What is I4C" href="#"/> </li> 
                            <li> <InternalLink text= "Who is I4C" href="#"/> </li> 
                        </UnorderedListStyling>
                </div>

                <div>
                    <h3>HOW IT WORKS</h3>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "Your account and benefits" href="#"/> </li> 
                            <li> <InternalLink text= "How does I4C operate?" href="#"/> </li> 
                            <li> <InternalLink text= "Causes we care about"href="#" /> </li> 
                        </UnorderedListStyling>
                </div>

                <div>
                    <h3>OUR IMPACT</h3>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "Cuases Name" href="#"/> </li> 
                            <li> <InternalLink text= "Cuases Name" href="#"/> </li> 
                            <li> <InternalLink text= "Cuases Name" href="#"/> </li> 
                            <li> <InternalLink text= "Cuases Name" href="#"/> </li> 
                            <li> <InternalLink text= "Cuases Name" href="#"/> </li> 
                            <li> <InternalLink text= "Cuases Name" href="#"/> </li> 
                            <li> <InternalLink text= "Cuases Name" href="#"/> </li> 
                        </UnorderedListStyling>
                </div>
                
                <div>
                    <h3>MORE INFORMATION</h3>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "Legal Stuff" href="#"/> </li> 
                            <li> <InternalLink text= "Privacy Policy" href="#"/> </li> 
                            <li> <InternalLink text= "Contact Us" href="#"/> </li> 
                        </UnorderedListStyling>
                </div>

                                <InternalLink text = "JOIN US" color= {"green"} href="#"/>
            
            </FooterStyling>
            <Disclaimer/>
            </>
        );
    }
}
 
export default Footer;