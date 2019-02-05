import React from "react";
import styled from "styled-components";
import logo from "./../../../img/I4C.png"
const Section = styled.section`
    box-shadow: inset 0 1px 3px -2px rgba(0, 0, 0, 0.8),
                inset 0 -1px 3px -10px rgba(255, 255, 255, 0.8);
    padding: 24px 88px;
    /* margin: 0 64px; */
    width: 100%;
    div {
        width: 100%;

        margin: 12px auto;
        font-size: 13px;
    }
    @media only screen and (min-width: 500px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
`
const Logo = styled.img`
width: 110px;
@media only screen and (min-width: 500px) {
    /* margin-right: 52px; */
}
`
const Disclaimer = (props) => {
    return (
        <Section>
            <Logo src={logo}/>
            <div>
                <small>Amet enim ipsa praesentium quia. Nisi exercitationem ut rem. Modi mollitia est dolores libero sed corrupti illum. Sunt et harum blanditiis rem.</small>
            </div>
        </Section>
    )
}

export default Disclaimer;