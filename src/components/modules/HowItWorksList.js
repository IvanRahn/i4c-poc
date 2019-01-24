import styled from "styled-components";
import React from "react"
import VolunteerCard from "./VolunteerCard";

const OrdList = styled.ol`
color: white;
display: flex;
flex-wrap: wrap;
/* align-content: center; */
justify-content:center;
width: 80%;
margin: 0 auto;
counter-reset: my-awesome-counter;
list-style: none;
    li {
        margin: 0 0 0.5rem 0;
        padding: 32px;
        counter-increment: my-awesome-counter;
        position: relative;
        ::before {
            content: counter(my-awesome-counter);
            color: white;
            font-size: 2.5rem;
            font-weight: bold;
            position: absolute;
            /* margin: auto; */
            --size: 50px;
            left: calc(-1 * var(--size) + 12px);
            /* line-height: var(--size); */
            width: var(--size);
            height: var(--size);
            top: 200px;
            background: transparent;
            border-radius: 50%;
            text-align: center;
            border-style: solid;
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