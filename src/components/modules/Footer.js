import React, {Component} from "react"; 
import styled from "styled-components";
import ButtonLink from "./ButtonLink"; 


// const DivStyling = styled.div`
    
// ` 

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
                            <li> <ButtonLink text= "What is I4C" /> </li> 
                            <li> <ButtonLink text= "Who is I4C" /> </li> 
                        </UnorderedListStyling>
                </div>

                <div>
                    <h1>HOW IT WORKS</h1>
                        <UnorderedListStyling>
                            <li> <ButtonLink text= "Your account and benefits" /> </li> 
                            <li> <ButtonLink text= "How does I4C operate?" /> </li> 
                            <li> <ButtonLink text= "Causes we care about" /> </li> 
                        </UnorderedListStyling>
                </div>

                <div>
                    <h1>OUR IMPACT</h1>
                        <UnorderedListStyling>
                            <li> <ButtonLink text= "Cuases Name" /> </li> 
                            <li> <ButtonLink text= "Cuases Name" /> </li> 
                            <li> <ButtonLink text= "Cuases Name" /> </li> 
                            <li> <ButtonLink text= "Cuases Name" /> </li> 
                            <li> <ButtonLink text= "Cuases Name" /> </li> 
                            <li> <ButtonLink text= "Cuases Name" /> </li> 
                            <li> <ButtonLink text= "Cuases Name" /> </li> 
                        </UnorderedListStyling>
                </div>
                
                <div>
                    <h1>MORE INFORMATION</h1>
                        <UnorderedListStyling>
                            <li> <ButtonLink text= "Legal Stuff" /> </li> 
                            <li> <ButtonLink text= "Privacy Policy" /> </li> 
                            <li> <ButtonLink text= "Contact Us" /> </li> 
                        </UnorderedListStyling>
                </div>

                                <ButtonLink text = "JOIN US" color= {"green"} />
            
            </FooterStyling>
        );
    }
}
 
export default Footer;