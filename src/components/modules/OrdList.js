import styled from "styled-components";
import React from "react"

const OrdList = styled.ol`
color: white;
display: flex;
flex-wrap: wrap;
/* align-content: center; */
justify-content:space-around;
width: 100%;
margin: 0 auto;
padding: 0 30px 128px;
counter-reset: my-awesome-counter;
list-style: none;
@media only screen and (min-width: 500px) {

}
    li {
        /* margin: 0 0 0.5rem 0; */
        counter-increment: my-awesome-counter;
        position: relative;
        width: 100%;
        @media only screen and (min-width: 500px) {
            width: auto;
            margin: 0 24px;
        }

        /* padding: 32px; */
        ::before {
            position: absolute;
            top: 200px;
            background: transparent;
            border-radius: 50%;
            text-align: center;
            content: counter(my-awesome-counter);
            border-style: solid;
            --size: 40px;
            width: var(--size);
            height: var(--size);
            font-size: 2rem;
            vertical-align: middle;
            /* left: 16px; */
            font-weight: bold;
            margin: auto;
            @media only screen and (min-width: 500px) {
            left: calc(-1 * var(--size) - 12px);
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