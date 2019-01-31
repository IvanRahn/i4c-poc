import Link from "./Link";
import styled from "styled-components";


const LinkWrapper = styled(Link) `
width: 100%;
margin: 24px 0;
:hover, :focus {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
@media only screen and (min-width: 500px) {
    width: auto;
    margin: 8px 20px;
    border-radius: 16px;
}
`

export default LinkWrapper