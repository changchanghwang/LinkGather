import React, { useState } from 'react';
import Title from '../elements/Title';
import styled from 'styled-components';
import Input from '../elements/Input';
import Button from '../elements/button';

const LoginModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleLoginModal = (e) => {
    if (e.target.className.includes('handleModal')) {
      setOpen(!open);
    }
  };
  return (
    <>
      <div
        className="handleModal"
        style={{ color: '#fff', marginLeft: '40px', cursor: 'pointer' }}
        onClick={handleLoginModal}
      >
        로그인
      </div>
      {open ? (
        <GrayBackground className="handleModal" onClick={handleLoginModal}>
          <PopUpWrap>
            <Title text={'로그인'} />
            <Close className="handleModal" onClick={handleLoginModal}>
              닫기
            </Close>
            <>
              <Input label={'이메일'} text={'example@example.com'} />
              <Input label={'패스워드'} text={'********'} isPassword={true} />
              <Button isFill={false}>로그인</Button>
            </>
          </PopUpWrap>
        </GrayBackground>
      ) : null}
    </>
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

const Close = styled.button`
  position: absolute;
  top: -25px;
  right: 0px;
  border: 0;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
`;

export default LoginModal;
