import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { label, text, isPassword } = props;
  return (
    <div style={{ marginBottom: '20px' }}>
      <Label>{label}</Label>
      <InputEl type={isPassword ? 'password' : 'text'} placeholder={text} />
    </div>
  );
};

const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
`;

const InputEl = styled.input`
  padding: 15px 10px;
  border: 1px solid #dee2e6;
  border-radius: 3px;
  width: 100%;
`;

export default Input;
