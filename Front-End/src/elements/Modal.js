import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signupModal } from '../redux/modules/modal';

const ModalBackground = (props) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.isOpen);
  const handleModal = (e) => {
    if (e.target.id === 'Back') {
      dispatch(signupModal(open));
    }
  };
  return (
    <GrayBackground id="Back" onClick={handleModal}>
      <PopUpWrap>{props.children}</PopUpWrap>
    </GrayBackground>
  );
};

const GrayBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const PopUpWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  z-index: 10;
  width: 370px;
  padding: 30px 40px;
  background-color: #fff;
`;

export default ModalBackground;
