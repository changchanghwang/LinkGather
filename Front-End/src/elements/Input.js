import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { label, text, isPassword, isPreview, _onChange } = props;
  return (
    <div style={{ marginBottom: '20px' }}>
      {isPreview ? (
        <>
          <Label>{label}</Label>
          <PreviewInput placeholder={text} />
          <Preview>이미지 미리보기</Preview>
        </>
      ) : (
        <>
          <Label>{label}</Label>
          <InputEl
            type={isPassword ? 'password' : 'text'}
            placeholder={text}
            onChange={_onChange}
          />
        </>
      )}
    </div>
  );
};

Input.defaultProps = {
  label: '',
  text: '',
  isPassword: false,
  isPreview: false,
  value: '',
  _onChange: () => {},
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
  width: 350px;
`;

const PreviewInput = styled.input`
  padding: 15px 10px;
  border: 1px solid #dee2e6;
  border-radius: 3px 0px 0px 3px;
  width: 198px;
`;

const Preview = styled.button`
  width: 150px;
  padding: 15px 10px;
  color: #fff;
  background: #000;
  border: 0;
  border-radius: 0px 3px 3px 0px;
  cursor: pointer;
`;

export default Input;
