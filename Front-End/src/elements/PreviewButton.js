import React from 'react';
import styled from 'styled-components';

const PreviewButton = (props) => {
  return <Preview>이미지 미리보기</Preview>;
};

const Preview = styled.button`
  width: 150px;
  padding: 15px 10px;
  color: #fff;
  background: #000;
  border: 0;
  border-radius: 0px 3px 3px 0px;
`;

export default PreviewButton;
