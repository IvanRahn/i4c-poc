import React, {Component} from "react";
import ButtonLink from "./ButtonLink";
import styled from "styled-components";
import LogoFull from "./../../img/I4C.png";
import LogoSquare from "./../../img/I4C_Square.png"; 

const Nav = styled.nav`
width: 100%;
height: 60px;
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: space-around;
padding: 8px;
border-bottom: 2px solid grey;
box-shadow: 0px 1px #888818;
position: absolute;
background-color: white;
z-index: 1;
top: 0;
 @media only screen and (min-width: 500px) {
    justify-content: space-between;
    flex-direction: row;
    height: 110px;
 }
`


const NavLinks = styled.div `

`

const MenuButton = styled.span` 
    display: block;
    width: auto;
    border-top: 2px solid;
    border-bottom: 2px solid;
    @media only screen and (min-width: 500px) {
        display: none;
    
    }

`
const NavUl = styled.ul `
    height: 110px;
    align-items: center;
    margin: 0px;
    display: flex;
    position: fixed;
    top: 0px;
    width: auto;
    list-style: none;
    transition: left 1s ease;
    top: 50px;
    flex-direction: column;
    
    @media only screen and (max-width: 499px) {
        left: -200px;
    }
    @media only screen and (min-width: 500px) {
        /* transition: all 0s ease-in-out; */
        top: 0px;
        flex-direction: row;
        right: 0px;
        li:nth-last-child(2) {
            margin-left: 50px;
       
   }
}
`
const NavCheckbox = styled.input `
    display: none;
    :checked + ul {
        left: 200px;
        @media only screen and (min-width: 420px) {
            /* flex-direction: row; */
            /* transition: right 1s ease; */
            /* width: 100%;        */

      }
    }
`
const LoginLink = styled(ButtonLink)`
display: block;
      width: auto;
      border-top: 2px solid;
      border-bottom: 2px solid;
      height: auto;
      @media only screen and (min-width: 500px) {
          display: none;
      }
`
const Logo = styled(ButtonLink)`
height: 58px;
width: 60px;
background-image: url(${LogoSquare});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
border-bottom: 0px;
 @media only screen and (min-width: 500px) {
    background-image: url(${LogoFull});
    width: 240px;
    height: 80px;
    background-color: black;
    margin-left: 64px;

 }

`



class NavBar extends Component {
    render() {
        return(
        <Nav aria-live="polite">
        <LoginLink 
            text="LOGIN" 
            href="#"
            section="nav" 
            location="homepage"
            color="green" 
            auto="auto"/>
        <Logo to="/" color="grey"/>
            
            <NavLinks>
                <label htmlFor="nav-checkbox">
                    <MenuButton>MENU</MenuButton>
                </label>
                <NavCheckbox type="checkbox" id="nav-checkbox"/>
                <NavUl>
                    <li> <ButtonLink text="ABOUT US" href="/board-page" section="nav" location="homepage"/></li> 
                    <li> <ButtonLink text="HOW IT WORKS"href="#"section="nav" location="homepage"/> </li>
                    <li> <ButtonLink text="OUR IMPACT"href="#"section="nav" location="homepage"/> </li>
                    <li> <ButtonLink text="CONTACT US"href="#"section="nav" location="homepage"/> </li>
                    <li> <ButtonLink text="Login"href="#"section="nav" location="homepage"/> </li>
                    <li> <ButtonLink text="JOIN"href="#"section="nav" location="homepage"/> </li>
                </NavUl>
            </NavLinks>
                
        </Nav>
        )
    }
}

export default NavBar 


