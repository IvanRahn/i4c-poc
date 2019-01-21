import React, {Component} from "react";
import ButtonLink from "./ButtonLink";
import styled from "styled-components";


const Nav = styled.nav`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;
`
const Logo = styled.svg `
width: 50px;
height: 50px;
background-color: black;
`
const NavLinks = styled.div `


`
const NavHamburger = styled.div `
:hover {
    span {
        border-top: 2px solid blue;
    }
}
`
const ButtonSpan = styled.span` 
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
      @media only screen and (min-width: 400px) {
          display: none;
        
      }

`
const NavUl = styled.ul `
    margin: 0px;
    display: flex;
    position: fixed;
    top: 0px;
    width: auto;
    list-style: none;
    right: -200px;
    transition: right 1s ease;
    top: 50px;
    flex-direction: column;
    /* @media only screen and (min-width: 390px) and (max-width: 399px) {
        right: -200px;
        transition: none;
    } */
    @media only screen and (min-width: 400px) {
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
        right: 200px;
        @media only screen and (min-width: 400px) {
            flex-direction: row;
            /* width: 100%;        */
      }
    }

`


class NavBar extends Component {
    render() {
        return(
        <Nav>
            <Logo />
            <NavLinks>
                <label htmlFor="nav-checkbox">
                <NavHamburger>
                    <ButtonSpan></ButtonSpan>
                    <ButtonSpan></ButtonSpan>
                    <ButtonSpan></ButtonSpan>
                </NavHamburger>
                </label>
                <NavCheckbox type="checkbox" id="nav-checkbox"/>
                <NavUl>
                    <li> <ButtonLink text="ABOUT US" href="#" section="nav" location="homepage"/></li> 
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


