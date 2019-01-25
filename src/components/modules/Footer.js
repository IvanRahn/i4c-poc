import React, {Component} from "react"; 
import styled from "styled-components";
import InternalLink from "./InternalLink"; 

const FooterStyling = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    font-size: 11px;
    a {
        align-self: flex-end;
    }
`

const UnorderedListStyling = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    
`

// "JOIN US" button style : 
// align-self: flex-end;

class Footer extends Component {
    render() { 
        
        return (  
            <FooterStyling>
                
                <div>
                    <h1>ABOUT US</h1>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "What is I4C" href="#"/> </li> 
                            <li> <InternalLink text= "Who is I4C" href="#"/> </li> 
                        </UnorderedListStyling>
                </div>

                <div>
                    <h1>HOW IT WORKS</h1>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "Your account and benefits" href="#"/> </li> 
                            <li> <InternalLink text= "How does I4C operate?" href="#"/> </li> 
                            <li> <InternalLink text= "Causes we care about"href="#" /> </li> 
                        </UnorderedListStyling>
                </div>

                <div>
                    <h1>OUR IMPACT</h1>
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
                    <h1>MORE INFORMATION</h1>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "Legal Stuff" href="#"/> </li> 
                            <li> <InternalLink text= "Privacy Policy" href="#"/> </li> 
                            <li> <InternalLink text= "Contact Us" href="#"/> </li> 
                        </UnorderedListStyling>
                </div>

                                <InternalLink text = "JOIN US" color= {"green"} href="#"/>
            
            </FooterStyling>
        );
    }
}
 
export default Footer;