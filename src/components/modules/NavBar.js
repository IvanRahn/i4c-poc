import React, {Component} from "react";
import ButtonLink from "./ButtonLink";
import styled from "styled-components";

const NavbarStyling = styled.nav`
    position: fixed;
    width: 100%;
    display: flex;
    border-bottom: 1px solid grey;
    padding: 32px;
    justify-content: space-around; 
    z-index:1; 
    background-color: rgba(255,255,255,0.5); 

    @media (max-width: 700px) {
    background: purple;
    width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
    }
`
const LogoContainer = styled.img`
    height: 50px; 
    width: 50px;
`
const DivStyling = styled.div`
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

                <LogoContainer>

                </LogoContainer>

                <DivStyling>
                    <UnorderedListStyling>    
                        <li> <ButtonLink text="ABOUT US" href="#" section="nav" location="homepage"/> </li>
                        <li> <ButtonLink text="HOW IT WORKS"href="#"section="nav" location="homepage"/> </li>
                        <li> <ButtonLink text="OUR IMPACT"href="#"section="nav" location="homepage"/> </li>
                        <li> <ButtonLink text="CONTACT US"href="#"section="nav" location="homepage"/> </li>
                    </UnorderedListStyling>
                </DivStyling>

                <DivStyling>
                    <UnorderedListStyling>
                        <li> <ButtonLink text="LOG IN" color={"green"} href="#"section="nav" location="homepage"/> </li>
                        <li> <ButtonLink text="JOIN" color={"green"} href="#"section="nav" location="homepage"/> </li>
                    </UnorderedListStyling>
                </DivStyling>

            </NavbarStyling >
        )
    }
}

export default NavBar 


// import React from 'react';
// import { slide as BurgerMenu } from 'react-burger-menu';
// import styled from 'styled-components';


// const StyledBurgerMenu = styled.div`
//   /* Position and sizing of burger button */
//   .bm-burger-button {
//     position: fixed;
//     width: 36px;
//     height: 30px;
//     left: 36px;
//     top: 36px;
//   }

//   /* Color/shape of burger icon bars */
//   .bm-burger-bars {
//     background: #373a47;
//   }

//   /* Position and sizing of clickable cross button */
//   .bm-cross-button {
//     height: 24px;
//     width: 24px;
//   }

//   /* Color/shape of close button cross */
//   .bm-cross {
//     background: #bdc3c7;
//   }

//   /* General sidebar styles */
//   .bm-menu {
//     background: #373a47;
//     padding: 2.5em 1.5em 0;
//     font-size: 1.15em;
//   }

//   /* Morph shape necessary with bubble or elastic */
//   .bm-morph-shape {
//     fill: #373a47;
//   }

//   /* Wrapper for item list */
//   .bm-item-list {
//     color: #b8b7ad;
//     padding: 0.8em;
//   }

//   /* Individual item */
//   .bm-item {
//     display: inline-block;
//   }

//   /* Styling of overlay */
//   .bm-overlay {
//     background: rgba(0, 0, 0, 0.3);
//   }
// `;


// export class Menu extends React.Component {
//   showSettings(event) {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <StyledBurgerMenu>
//         <BurgerMenu>
//           <a id="home" className="menu-item" href="/">Home</a>
//           <a id="about" className="menu-item" href="/about">About</a>
//         </BurgerMenu>
//       </StyledBurgerMenu>
//     );
//   }
// }

// export default Menu;