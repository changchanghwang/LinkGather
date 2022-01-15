import React from 'react';
import styled from 'styled-components';

const CloseButton = (props) => {
  return <Close>닫기</Close>;
};

const Close = styled.button`
  position: absolute;
  top: -25px;
  right: 0px;
  border: 0;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
`;

export default CloseButton;
