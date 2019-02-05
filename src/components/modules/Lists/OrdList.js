import styled from "styled-components";
import React from "react"

const OrdList = styled.ol`
display: grid;
grid-column-gap: 24px;
grid-row-gap: 24px;
grid-template-columns: 100%;
@media only screen and (min-width: 500px){
grid-column-gap: 48px;
grid-template-columns: 50% 50%;
    margin: 0 48px 0 0;
}
@media only screen and (min-width: 960px) {
    /* padding: 0 48px; */
   /* margin: 0 0 0 24px; */
grid-column-gap: 24px;
grid-template-columns: 33% 33% 33%;
} 
color: white;
width: 100%;
margin: 0 auto;
padding: 0;
counter-reset: my-awesome-counter;
list-style: none;
    li {
        /* margin: 0 0 0.5rem 0; */
        grid-column: auto;
        counter-increment: my-awesome-counter;
        position: relative;
        width: 100%;
        @media only screen and (min-width: 500px) {
            /* width: auto; */
            grid-column: auto;
            margin: 0 auto;
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