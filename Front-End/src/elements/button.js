import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { children, isFill } = props;
  return isFill ? (
    <button>{children}</button>
  ) : (
    <SubmitButton>{children}</SubmitButton>
  );
};

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  padding: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: 0;
  border-radius: 3px;
  background-color: #000;
`;

export default Button;
