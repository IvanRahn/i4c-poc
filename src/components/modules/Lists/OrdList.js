import styled from "styled-components";
import React from "react"

const OrdList = styled.ol`
display: grid;
grid-column-gap: 24px;
grid-row-gap: 24px;
grid-template-columns: 100%;
@media only screen and (min-width: 500px){
grid-template-columns: 50% 50%;
}
@media only screen and (min-width: 960px) {
   
grid-template-columns: 33% 33% 33%;
} 
color: white;
/* display: flex; */
/* flex-wrap: wrap; */
/* align-content: center; */
/* justify-content:space-around; */
width: 100%;
margin: 0 auto;
padding: 0 30px 128px;
counter-reset: my-awesome-counter;
list-style: none;
    li {
        /* margin: 0 0 0.5rem 0; */
        grid-column: auto;
        counter-increment: my-awesome-counter;
        position: relative;
        width: 100%;
        @media only screen and (min-width: 500px) {
            width: auto;
            margin: 0 auto;
        }

        /* padding: 32px; */
        ::before {
            position: absolute;
            top: 200px;
            background: transparent;
            border-radius: 50%;
            text-align: center;
            vertical-align:middle;
            padding: 5px 7px 9px;
            content: counter(my-awesome-counter);
            border-style: solid;
            width: 24px;
            height: 24px;
            font-size: 24px;
            vertical-align: middle;
            /* left: 16px; */
            font-weight: bold;
            margin: auto;
            @media only screen and (min-width: 960px) {
            left: calc(-44px - 12px);
            top: 250px;
            }
        }
    }
`
const List = ({children}) => {
    return (
        <OrdList>
            {children}
        </OrdList>
    )
}

export default List;