import React from "react";
import styled, {keyframes} from "styled-components";

const keyframe = keyframes`
to {
  opacity: 0.1;
  transform: translate3d(0, -1rem, 0);
}
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 60px);
div {
  width: 1rem;
  height: 1rem;
  /* margin: 3rem 0.2rem; */
  margin: auto 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: ${keyframe} 0.6s infinite alternate;
}
div:nth-child(2) {
  animation-delay: 0.2s;
}
div:nth-child(3) {
  animation-delay: 0.4s;
}
`


const Loader = () => {
    return (
        <Div>
            <div></div>
            <div></div>
            <div></div>
        </Div>
    )
}
export default Loader;