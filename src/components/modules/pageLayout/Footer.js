import React, {Component} from "react"; 
import styled from "styled-components";
import {InternalLink, Loading} from "./../"; 
import Disclaimer from "./Disclaimer";
import {brightGreen, brandGrey} from "../BrandStyle";
import {getContent} from '../../../actions';
import {connect} from "react-redux";
const FooterStyling = styled.footer`
    box-shadow: inset 0 1px 3px -2px rgba(0, 0, 0, 0.8),
                inset 0 -1px 3px -10px rgba(255, 255, 255, 0.8);
    z-index: 1;
    display: grid;
    padding: 48px 24px 0;
    @media only screen and (min-width:768px) {
    padding: 48px 88px 0;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    text-align: left;
    width: 100%;
    }
    
    @media only screen and (min-width: 960px) {
        grid-template-columns: repeat(4, auto)
    }
    
    div {
        align-self: flex-start;
        grid-column: auto;
        text-align: left;
        margin: 0;
        padding: 0;
    }
 
    h6 {
        text-align: left;
        padding-bottom: 4px;
        margin-bottom: 12px;
    }
    a:last-child {
        align-self: flex-start;
        /* @media only screen and (min-width: 500px) {
            grid-column: 3;
        } */
        @media only screen and (min-width: 960px) {
            grid-column: 4;
        }
    }
`

const UnorderedListStyling = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    li {
        min-width: 128px;
    }
    a {
        text-align: left;
        margin: 0;
        margin-bottom: 16px;
        align-self: flex-end;
        width: fit-content;
        font-size: 14px;
        border-bottom: 1px solid ${brandGrey}
    }
    @media only screen and (min-width:500px) {
        }
`

// "JOIN US" button style : 
// align-self: flex-end;

class Footer extends Component {
    componentDidMount () {
        const {causes, getContent} = this.props;
        if (!causes) {
        getContent("causes");
        }
    }
    render() { 
        const {causes, causesIsFetching, causesError} = this.props;		
        console.log('TCL: Footer -> render -> causes', this.props)
        if (causesIsFetching) {
            return <Loading/>
        } else if (causesError || !causes) {
            return <div>Error</div>
        }
        return (  
            <>
            <FooterStyling>
                <div>
                    <h6>INVESTING FOR CHARITY</h6>
                        <UnorderedListStyling>
                            <li> <InternalLink 
                            text= "About" 
                            width="fit-content"
                            to="/about"/> </li> 
                            <li> <InternalLink 
                            width="fit-content"
                            text= "How It Works" 
                            to="/how-it-works"/> </li> 
                             <li> <InternalLink 
                            width="fit-content"
                            text= "Security" 
                            to="#"/> </li>
                             <li> <InternalLink 
                            width="fit-content"
                            text= "Privacy" 
                            to="#"/> </li>
                             <li> <InternalLink 
                            width="fit-content"
                            text= "Terms And Conditions" 
                            to="#"/> </li>  
                             <li> <InternalLink 
                            width="fit-content"
                            text= "FAQ" 
                            to="#"/> </li>  
                             <li> <InternalLink 
                            width="fit-content"
                            text= "help@i4c.org" 
                            to="#"/> </li> 
                             <li> <InternalLink 
                            width="fit-content"
                            text= "1300123456" 
                            to="#"/> </li> 
                        </UnorderedListStyling>
                        </div>
                <div>
                    <h6>OUR IMPACT</h6>
                        <UnorderedListStyling>
                            {causes.map(cause => {
                                return (
<li> <InternalLink text={cause.title} to={`cause/${cause.slug}`}/> </li> 
                                )
                            })}
                        </UnorderedListStyling>
                </div>
                
                <div>
                    <h6>SOCIAL</h6>
                        <UnorderedListStyling>
                            <li> <InternalLink text= "Facebook" to="#"/> </li> 
                            <li> <InternalLink text= "Twitter" to="#"/> </li> 
                            <li> <InternalLink text= "LinkdIn" to="#"/> </li> 
                            <li> <InternalLink text= "Volunteer Opportunities" to="#"/> </li> 
                            
                        </UnorderedListStyling>
                </div>

                                <InternalLink text = "JOIN US" color= {brightGreen} to="#"/>
            
            </FooterStyling>
            <Disclaimer/>
            </>
        );
    }
}
 
const mapStateToProps = (state) => {
    const {causes, causesIsFetching, causesError} = state.cause
    return {
        causes,
        causesIsFetching,
        causesError
    }
}

export default connect(mapStateToProps, {
    getContent
})(Footer);