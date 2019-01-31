import React, {Component} from "react";
import { SectionWrapper } from ".";
import styled from "styled-components";
import Background from "./../../img/placeholder_background_wave.png"
const Img = styled.img `
    width: 100%;
    margin: auto auto 0;
    /* position: absolute; */
    /* top: -30px; */
    margin-bottom: -8px;
    @media only screen and (min-width: 500px) {
    /* top: -108px; */
    /* margin-bottom: -200px; */
    }
`
const SectionWithWave = ({height, id, color, children}) => {
        return (     
            <>
            <Img src={Background} alt =""/>
            <SectionWrapper 
            height={height}
            id={id}
            color={color}
            >

                {children}

            </SectionWrapper>
            </>
         );
    }

export default SectionWithWave;
 