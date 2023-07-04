import React from 'react'

interface ButtonProps {
  text: string;
  url: string;
  behavior: string;
}

const Button: React.FC<ButtonProps> = ({ text, url, behavior }) => {
  return (
    <button> <a href={url} target={behavior}> { text } </a> </button>
  );
}

export default Button