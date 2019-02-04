import React from "react";
import styled from "styled-components";
import {brandWhite} from "../BrandStyle"
const Quote = styled.div`
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 24px;
    margin: 0 24px;
    z-index: 1;
    max-width: 100%;
    background-color: ${brandWhite};
    bottom: 0;
    transform: translateY(50%);
    @media only screen and (min-width: 500px) {
    width: 60%;
    }
    @media only screen and (min-width: 960px) {
    width: 576px;
    }
    h3 {
        padding-bottom: 12px;
    ::before, ::after {
        content: '"';
    }
    }
    h4 {
        ::before {
            content: "- ";
        }
    }

`
const QuoteCard = ({quote, author}) => {
    return (
        <Quote>
            <h3>{quote}</h3>
            <h4>{author}</h4>
        </Quote>
    )
}
export default QuoteCard;
