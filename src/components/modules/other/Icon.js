import styled from "styled-components";
const Icon = styled.img`
height: ${props => {
        if (props.big) return "56px;"
        if (props.medium) return "56px;"
        return "40px;"
}
};
width: ${props => {
        if (props.big)return "56px;"
        if (props.medium) return "56px;"
        return "40px;"
}
};
margin-bottom: 8px;
@media only screen and (min-width: 500px) {
margin-bottom: 24px;
    height: ${props => {
        if (props.big) return "96px;"
        if (props.medium) return "64px;"
        return "48px;"
}
};
width: ${props => {
    if (props.big)return "96px;"
    if (props.medium) return "64px;"
    return "48px;"
}
};
};
    /* ${props => `width=${props.width}` || "width=40px" }
    ${props => `height=${props.height}` || "height=40px" } */
`
export default Icon;