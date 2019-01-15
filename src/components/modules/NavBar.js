import React, {Component} from "react";
import ButtonLink from "./ButtonLink";
import styled from "styled-components";

const NavbarStyling = styled.nav`
    position: sticky;
    display: flex;
`

const UnorderedListStyling = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
`

class NavBar extends Component {
    render() {
        return(
            <NavbarStyling>
                <p>LOGO</p>
                <UnorderedListStyling>    
                    <li> <ButtonLink text="ABOUT US"/> </li>
                    <li> <ButtonLink text="HOW IT WORKS"/> </li>
                    <li> <ButtonLink text="OUR IMPACT"/> </li>
                    <li> <ButtonLink text="CONTACT US"/> </li>
                    
                    <li> <ButtonLink text="LOG IN" color={"green"}/> </li>
                    <li> <ButtonLink text="JOIN" color={"green"}/> </li>
                </UnorderedListStyling>
            </NavbarStyling >
        )
    }
}

export default NavBar