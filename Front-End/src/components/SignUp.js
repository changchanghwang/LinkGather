import React from 'react';
import Button from '../elements/button';
import Input from '../elements/Input';
import Title from '../elements/Title';
import ModalBackground from '../elements/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { signupModal } from '../redux/modules/modal';
import styled from 'styled-components';

const SignUpModal = (props) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.isOpen);
  const handleModal = () => {
    dispatch(signupModal(open));
  };
  return (
    <>
      <div style={{ color: '#fff' }} onClick={handleModal}>
        회원가입
      </div>
      {open ? (
        <ModalBackground>
          <Title text={'회원가입'} />
          <Close onClick={handleModal}>닫기</Close>
          <>
            <Input label={'이름'} text={'홍길동'} />
            <Input label={'이메일'} text={'example@example.com'} />
            <Input label={'패스워드'} text={'********'} isPassword={true} />
            <Input
              label={'패스워드 확인'}
              text={'********'}
              isPassword={true}
            />
            <Button isFill={false}>회원가입</Button>
          </>
        </ModalBackground>
      ) : null}
    </>
  );
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

export default SignUpModal;
