import React from 'react';

const GameIcon = ({width, height}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={width} 
    height={height}>
    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z" 
    fill="rgba(85,190,192,1)"/>
  </svg>
);

export default GameIcon;