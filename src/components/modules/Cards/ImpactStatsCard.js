import React  from "react";
import styled from "styled-components";
import {brandBlack, brandWhite, brightGreen} from "./../"

const CardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    justify-items: flex-start;
    margin: 24px;
    img {
        width: 40px;
        height: 40px;
    }
    @media only screen and (min-width: 960px) {
        align-items: center;
    }
    p {
        @media only screen and (min-width: 960px) {
            text-align: center;
        }
    }
`
const Stats = styled.p`
color: ${brightGreen};
font-size: 24px;
`

const ImpactStatsCard = () => {
    
        return(
            <CardWrapper>
                <Stats>STATS</Stats>
                <p>Explaining the stats</p>
            </CardWrapper>

        )
}

export default ImpactStatsCard;