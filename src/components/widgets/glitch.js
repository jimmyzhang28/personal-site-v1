// CREDIT
// https://codesandbox.io/s/6z56m8x18k?module=/App.js&file=/Glitch.js
// http://codepen.io/lbebber/pen/ypgql?editors=0100

import styled, { keyframes } from "styled-components";

const steps = 20;
const rnd = () => Math.floor(Math.random() * 225);
const doPercAndValue = (a, i) => ({
  perc: `${i * (100 / steps)}%`,
  value: `clip: rect(${rnd()}px, 9999px, ${rnd()}px, 0)`
});

const doKeyframes = () =>
  Array(steps).fill(null).map(doPercAndValue).reduce((acc, next) => {
    return `${acc}
      ${next.perc} {
        ${next.value}
      }`;
  }, "");

const anim = keyframes`${doKeyframes()}`;
const anim2 = keyframes`${doKeyframes()}`;

const Glitch = styled.div`
  font-size: clamp(150px, 28vw, 225px);
  font-weight: 700;
  position: relative;
  color: var(--stark);

  &:after {
    content: attr(data-glitch);
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 red;
    top: 0;
    color: var(--stark);
    background: var(--dark-navy);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${anim} 2s infinite linear alternate-reverse;
  }

  &:before {
    content: attr(data-glitch);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: var(--stark);
    background: var(--dark-navy);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${anim2} 3s infinite linear alternate-reverse;
  }
`;

export default Glitch;
