import  React  from 'react';
import  styled  from 'styled-components';

const Button = styled.button `
width: auto;
margin: 0 auto;
background: none;
color: inherit;
border: none;
:hover {
    cursor: pointer;
}
::after {
    content: "";
    display: block;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    height: 12px;
    width: 12px;
    margin: 8px auto;
    left: 49.5%;
}
`

const ScrollButton = ({target, text}) => {

    const scrollAndGa = (event) => {
        const element = document.getElementById(target)
		console.log('​ImpactSection -> scrollAndGa -> element', element)
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    return (
        <Button onClick={scrollAndGa}>{text}</Button>

    )
};

export default ScrollButton;