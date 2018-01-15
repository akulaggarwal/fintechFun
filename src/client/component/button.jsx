import React from 'react';

// let Props = {
//   label,
//   handleClick
// };

const Button = ({ label, handleClick }: Props) =>
  <button onClick={handleClick}>{label}</button>;

export default Button;
