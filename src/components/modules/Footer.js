import React, {Component} from "react"; 
import styled from "styled-components";
import ButtonLink from "./ButtonLink"; 


const DivStyling = styled.div`
    /* display: flex; */
` 

const FooterStyling = styled.footer`
    /* display: flex; */
    /* border-bottom: 1px solid grey; */
    /* padding: 32px;  */
`

const UnorderedListStyling = styled.ul`
    /* list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;  */
`

class Footer extends Component {
    render() { 
        
        return (  
            <FooterStyling>
                <DivStyling>
                    <UnorderedListStyling>
                        <li> <h1>ABOUT US</h1> </li>
                        <li> <ButtonLink text= "What is I4C" /> </li> 
                        <li> <ButtonLink text= "Who is I4C" /> </li> 


                        <li> <h1>HOW IT WORKS</h1> </li>
                        <li> <ButtonLink text= "Your account and benefits" /> </li> 
                        <li> <ButtonLink text= "How does I4C operate?" /> </li> 
                        <li> <ButtonLink text= "Causes we care about" /> </li> 



                        <li> <h1>OUR IMPACT</h1> </li>
                        <li> <ButtonLink text= "Cuases Name" /> </li> 
                        <li> <ButtonLink text= "Cuases Name" /> </li> 
                        <li> <ButtonLink text= "Cuases Name" /> </li> 
                        <li> <ButtonLink text= "Cuases Name" /> </li> 
                        <li> <ButtonLink text= "Cuases Name" /> </li> 
                        <li> <ButtonLink text= "Cuases Name" /> </li> 
                        <li> <ButtonLink text= "Cuases Name" /> </li> 




                        <li> <h1>MORE INFORMATION</h1> </li> 
                        <li> <ButtonLink text= "Legal Stuff" /> </li> 
                        <li> <ButtonLink text= "Privacy Policy" /> </li> 
                        <li> <ButtonLink text= "Contact Us" /> </li> 


                    </UnorderedListStyling> 
                    <ButtonLink text = "JOIN US" color= {"green"} />
                </DivStyling>
            </FooterStyling>
        );
    }
}
 
export default Footer;