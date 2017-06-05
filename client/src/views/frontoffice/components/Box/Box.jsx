import React from 'react';
import './Box.css';

const Box = ({ children, className }) => (
  <div className={`box ${className}`}>
    {children}
  </div>
);

export default Box;
