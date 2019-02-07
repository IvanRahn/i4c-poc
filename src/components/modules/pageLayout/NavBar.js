import React, {Component} from "react";
import {InternalLink} from "./../";
import styled from "styled-components";
import LogoFull from "./../../../img/I4C.png";
import LogoSquare from "./../../../img/I4C_Square.png"; 
import {brightGreen} from "./../BrandStyle"
const Wrapper = styled.nav`
display: flex;
justify-content:center;
position: fixed;
width: 100%;
z-index: 1;
top: 0;
background: white;
border-bottom: 2px solid grey;
@media only screen and (min-width: 900px) {
height: 112px;
}
`
const Nav = styled.div`
max-width: 1200px;
margin: 0 auto;
width: 100%;
height: 60px;
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: space-around;
padding: 8px;
box-shadow: 0px 1px #888818;
position: absolute;
background-color: white;
z-index: 2;
top: 0;
 @media only screen and (min-width: 900px) {
    justify-content: space-between;
    flex-direction: row;
    height: 110px;
 }
 svg {
     width: 40px;
     height: 40px;
     @media only screen and (max-width: 900px) {
        display: none;
     }
 }
`

const MenuButton = styled.span` 
    display: block;
    width: auto;
    border-top: 2px solid;
    border-bottom: 2px solid;
    @media only screen and (min-width: 900px) {
        display: none;
    
    }
`
const NavUl = styled.ul `
    /* height: 110px; */
    align-items: center;
    padding-left: 0;
    margin-top: 10px;
    margin: 0px;
    display: flex;
    position: fixed;
    list-style: none;
    transition: left 1s ease;
    top: 50px;
    flex-direction: column;
    height: calc(100vh - 50px);
    background-color: white;
    justify-content: space-around;
    /* width: 100%; */
    a {
        margin: 0 24px;
    }
    @media only screen and (max-width: 899px) {
        left: -200px;
    }
    @media only screen and (min-width: 900px) {
        /* transition: all 0s ease-in-out; */
    align-items: flex-end;

        height: 60px;
        position: relative;
        top: 0px;
        flex-direction: row;

        li{
            :nth-last-child(2) {
            margin-left: 50px;
            display: flex;
           
        }
        }
}
`
const NavCheckbox = styled.input `
    display: none;
    @media only screen and (max-width: 899px) {
    :checked + ul {
        left: 0px;
        }
    };
`
const LoginLink = styled(InternalLink)`
display: block;
      width: auto;
      border-bottom: 2px solid;
      height: auto;
      padding-bottom: 0;
      @media only screen and (min-width: 900px) {
          display: none;
      }
`
const Logo = styled(InternalLink)`
height: 58px;
width: 60px;
background-image: url(${LogoSquare});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
border-bottom: 0px;
@media only screen and (min-width: 500px) and (max-width: 899px){
margin-left: 10%;
}
 @media only screen and (min-width: 900px) {
    background-image: url(${LogoFull});
    width: 200px;
    height: 80px;
 }
`
const TabletMenu = styled.div`
    width: auto;
    display:flex;
    justify-self: flex-end;
    a:first-child {
        display: none;
        @media only screen and (min-width: 500px) and (max-width: 900px) {
            display: inline;
        }
    }
   svg {
       display:none;
       @media only screen and (min-width: 500px) and (max-width: 900px) {
           display:block;
       }
   }
   @media only screen and (min-width: 900px) {
       display: none;
   }
`

class NavBar extends Component {
    state = {width: 0}
    componentDidMount() {
        this.updateDimensions()
        window.addEventListener('resize', this.updateDimensions)
        // const body = document.querySelector("body");
        // body.addEventListener('scroll', this.hideNav)
        // this.nav = document.querySelector("nav")
    }
    // hideNav = () => {
    //     this.nav.style.opacity = 0;
    // }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions, true);
    }
    componentDidUpdate () {
        if (this.main && this.footer) {
            this.main.style.left = "";
            this.footer.style.left = "";
        } 

        const checkbox = document.querySelector("#nav-checkbox")
        checkbox.checked = false; 

    }
    
    updateDimensions = () => {
        this.setState({checked: false})
        return this.setState({width: window.innerWidth});
    }
     
    moveContent = (event) => {
        this.main = document.querySelector("main");
        this.footer = document.querySelector("footer");
        this.main.style.left = this.main.style.left ? "" : "200px";
        this.footer.style.left = this.footer.style.left ? "" : "200px";
       
        
    }
    
    render() {
        return(
            <Wrapper>
        <Nav >
        <TabletMenu>
        <LoginLink 
            text="LOGIN" 
            to="#"
            section="nav" 
            location="homepage"
            color="green" 
            auto="auto"/>
            <svg viewBox="-20 -20 100 100">
<path d="m30.5 24.1c0.1-2.8-2.2-9.8-2.2-9.8 0.7 0.1 5.2 6.8 4.7 9.6 4.3-1 7.3-5.1 6.7-9.5l-0.1-0.6c-1-7.4-9.3-12.2-9.7-12.4l-0.9-0.5-0.8 0.7c-0.3 0.2-5.7 5.5-6.3 11.8-0.1 0.8-0.1 1.7 0 2.5l0.1 0.6c0.1 0.7 0.3 1.3 0.5 1.9-5.9-3.5-13.6-2.4-14-2.3l-1.1 0.2-0.1 1.1c0 0.4-0.5 8.6 3.5 14.4 0.5 0.8 1.1 1.5 1.8 2.1l0.5 0.5c2.8 2.6 6.5 3.3 9.7 2.2 0.3-0.1 0.7-0.3 0.9-0.6l0.1-0.1c0.7-0.6 1-1.5 0.8-2.5-0.4-2.7-6.8-7.3-6.8-7.3 0.6-0.3 8 2.8 9 5.4 0 0.1 0 0.1 0.1 0.2 0.2 0.7 0.3 1.5 0.3 2.3l-0.2 13.4h-2.3c-4.4 0.4-8.7 1.4-12.8 3.1-1 0.4-2 1-3.2 1.7 0.1 0.1 0.2 0.1 0.2 0.2 0.5 0.4 0.9 0.8 1.3 1.1 1.1 0.8 2.3 1.5 3.5 2.1 4.3 2.3 9.2 3.7 14.6 3.7 5.3 0 10.4-1.4 14.8-3.8 1.9-0.9 3.7-2 5.4-3.6l0.1-0.1c-3.2-2-6.6-3.1-10.1-3.8-1.9-0.4-3.9-0.4-5.8-0.7l-2.8 0.1 0.1-7.4c1.1 2.4 3.3 4.3 6.1 4.8l0.6 0.1c0.8 0.2 1.7 0.2 2.5 0.2 6.3-0.1 12-5.1 12.3-5.3l0.8-0.7-0.4-1c-0.2-0.4-4.3-9.1-11.6-10.6l-0.6-0.1c-2.7-0.6-5.5 0.3-7.4 2 3.1 0.9 7.3 4.1 7.4 4.7 0 0-6.4-2.8-9.3-2.3 0 0 0 0.1-0.1 0.1l0.2-7.8z"/>
</svg>
        <LoginLink 
            text="JOIN" 
            to="#"
            section="nav" 
            location="homepage"
            color="green" 
            auto="auto"/>
            </TabletMenu>
        <Logo to="/" />
            
                <label htmlFor="nav-checkbox">
                    <MenuButton>MENU</MenuButton>
                </label>
                <NavCheckbox type="checkbox" onClick={this.moveContent}id="nav-checkbox"/>
                <NavUl>
                    <li> <InternalLink text="ABOUT US" to="/about" section="nav" location="homepage"/></li> 
                    <li> <InternalLink text="HOW IT WORKS"to="/how-it-works"section="nav" location="homepage"/> </li>
                    <li> <InternalLink text="OUR IMPACT"to="/cause"section="nav" location="homepage"/> </li>
                    
                    <li> <InternalLink 
                    color={brightGreen}text="LOGIN"to="#"section="nav" location="homepage"/> </li>
                    <svg viewBox="-20 -20 100 100">
<path d="m30.5 24.1c0.1-2.8-2.2-9.8-2.2-9.8 0.7 0.1 5.2 6.8 4.7 9.6 4.3-1 7.3-5.1 6.7-9.5l-0.1-0.6c-1-7.4-9.3-12.2-9.7-12.4l-0.9-0.5-0.8 0.7c-0.3 0.2-5.7 5.5-6.3 11.8-0.1 0.8-0.1 1.7 0 2.5l0.1 0.6c0.1 0.7 0.3 1.3 0.5 1.9-5.9-3.5-13.6-2.4-14-2.3l-1.1 0.2-0.1 1.1c0 0.4-0.5 8.6 3.5 14.4 0.5 0.8 1.1 1.5 1.8 2.1l0.5 0.5c2.8 2.6 6.5 3.3 9.7 2.2 0.3-0.1 0.7-0.3 0.9-0.6l0.1-0.1c0.7-0.6 1-1.5 0.8-2.5-0.4-2.7-6.8-7.3-6.8-7.3 0.6-0.3 8 2.8 9 5.4 0 0.1 0 0.1 0.1 0.2 0.2 0.7 0.3 1.5 0.3 2.3l-0.2 13.4h-2.3c-4.4 0.4-8.7 1.4-12.8 3.1-1 0.4-2 1-3.2 1.7 0.1 0.1 0.2 0.1 0.2 0.2 0.5 0.4 0.9 0.8 1.3 1.1 1.1 0.8 2.3 1.5 3.5 2.1 4.3 2.3 9.2 3.7 14.6 3.7 5.3 0 10.4-1.4 14.8-3.8 1.9-0.9 3.7-2 5.4-3.6l0.1-0.1c-3.2-2-6.6-3.1-10.1-3.8-1.9-0.4-3.9-0.4-5.8-0.7l-2.8 0.1 0.1-7.4c1.1 2.4 3.3 4.3 6.1 4.8l0.6 0.1c0.8 0.2 1.7 0.2 2.5 0.2 6.3-0.1 12-5.1 12.3-5.3l0.8-0.7-0.4-1c-0.2-0.4-4.3-9.1-11.6-10.6l-0.6-0.1c-2.7-0.6-5.5 0.3-7.4 2 3.1 0.9 7.3 4.1 7.4 4.7 0 0-6.4-2.8-9.3-2.3 0 0 0 0.1-0.1 0.1l0.2-7.8z"/>
</svg>
                    <li> <InternalLink 
                    color={brightGreen}text="JOIN"to="#"section="nav" location="homepage"/> </li>
                </NavUl>
                
        </Nav>
        </Wrapper>
        )
    }
}
export default NavBar 
