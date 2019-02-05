import  React  from 'react';
import  styled  from 'styled-components';
import {brightGreen} from "../BrandStyle"

const Button = styled.button `
width: auto;
height: auto;
background: none;
color: inherit;
margin-top: auto;
color: ${brightGreen};
align-self: flex-start;
margin-left: 24px;
border: 0;
border-bottom: 3px solid ${brightGreen};
:hover {
    cursor: pointer;
}
@media only screen and (min-width: 500px) {
    margin: 8px auto;
    }
`
const Arrow = styled.div`
    display: block;
    border-left: 1px solid ${brightGreen};
    border-bottom: 1px solid ${brightGreen};
    transform: rotate(-45deg);
    height: 12px;
    width: 12px;
    margin-left: 54px;
    @media only screen and (min-width: 500px) {
    margin: 8px auto;
    }
`
const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-start;
`
const ScrollButton = ({target, text}) => {

    const scrollAndGa = (event) => {
        const element = document.getElementById(target)
        element.scrollIntoView(true, {behavior: "smooth", block: "end", inline: "nearest"});
    }

    return (
        <Div>
        <Button onClick={scrollAndGa}>{text}</Button>
        <Arrow/>
        </Div>
    )
};

export default ScrollButton;