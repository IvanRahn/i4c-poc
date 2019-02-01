import React from "react";
import { SectionWrapper } from ".";
import styled from "styled-components";
import Background from "./../../img/placeholder_background_wave.png"
const Img = styled.img `
    width: 100%;
    margin: auto auto 0;
    position: absolute;
    bottom: calc(100% + 8px);
    margin-bottom: -8px;
   
`
const SectionWithWave = ({height, id, color, children}) => {
        return (     
            <>
            <SectionWrapper 
            height={height}
            id={id}
            color={color}
            >
            <Img src={Background} alt =""/>

                {children}

            </SectionWrapper>
            </>
         );
    }

export default SectionWithWave;
 