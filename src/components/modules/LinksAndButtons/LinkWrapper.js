import Link from "./Link";
import styled from "styled-components";
import {darkGreen, brightGreen} from "./../BrandStyle";

const LinkWrapper = styled(Link) `
width: auto;
margin: 24px 0;
:hover, :focus {
    > div {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: ${darkGreen};
    }
}
@media only screen and (min-width: 500px) {
    margin: 8px 20px;
    border-radius: 16px;
}
`

export default LinkWrapper