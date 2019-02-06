import styled from "styled-components"; 
import HorizontalCard from "./HeroArticleCard"; 


// Props you can use for this Component:
//className, CardHeading, CardText, CardImage, CardName

const SmallHorizontalCard = styled(HorizontalCard)`
img {
    border-radius: 0;
    height: 100px;
    width: 100px;
}

` 


export default SmallHorizontalCard; 