import React from 'react';

const ExternalIcon = ({width, height}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    width={width} 
    height={height}>
    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M13 22C7.477 22 3 17.523 3 12S7.477 2 13 2s10 4.477 10 10-4.477 10-10 10zM8 11.5l4 1.5 1.5 4.002L17 8l-9 3.5z"
    fill="rgba(85,190,192,1)"/>
  </svg>
);

export default ExternalIcon;