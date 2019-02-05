import React from "react";
import styled from "styled-components";
import logo from "./../../../img/I4C.png"
const Section = styled.section`
    /* box-shadow: inset 0px 2px 2px 0px grey; */
    padding: 24px;
    margin: 0 64px;
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