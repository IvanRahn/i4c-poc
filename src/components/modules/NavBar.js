import React, {Component} from "react";
import ButtonLink from "./ButtonLink";
import styled from "styled-components";
import logo from "./../../img/I4C.png"


const Nav = styled.nav`
width: 100%;
height: 110px;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid grey;
box-shadow: 0px 1px #888818;
`
const Logo = styled.img `
width: auto;
height: 80px;
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
      @media only screen and (min-width: 420px) {
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
    @media only screen and (max-width: 419px) {
    left: -200px;
    }
    @media only screen and (min-width: 420px) {
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


class NavBar extends Component {
    render() {
        return(
        <Nav aria-live="polite">
            <Logo src={logo} />
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


