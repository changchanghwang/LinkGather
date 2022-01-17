import React, { useState } from 'react';
import Button from '../elements/button';
import Input from '../elements/Input';
import Title from '../elements/Title';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const SignUpModal = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [open, setOpen] = useState(false);
  const handleSignUpModal = (e) => {
    if (e.target.className.includes('handleModal')) {
      setOpen(!open);
    }
  };

  const SignUp = () => {
    const data = {
      email,
      name,
      password,
      passwordCheck,
    };
    console.log(data);
  };
  return (
    <>
      <div
        className="handleModal"
        style={{ color: '#fff', cursor: 'pointer' }}
        onClick={handleSignUpModal}
      >
        회원가입
      </div>
      {open ? (
        <GrayBackground className="handleModal" onClick={handleSignUpModal}>
          <PopUpWrap>
            <Title text={'회원가입'} />
            <Close className="handleModal" onClick={handleSignUpModal}>
              닫기
            </Close>
            <>
              <Input
                label={'이름'}
                text={'홍길동'}
                _onChange={(e) => setName(e.target.value)}
              />
              <Input
                label={'이메일'}
                text={'example@example.com'}
                _onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={'패스워드'}
                text={'********'}
                isPassword={true}
                _onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label={'패스워드 확인'}
                text={'********'}
                isPassword={true}
                _onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <Button isFill={false} _onClick={SignUp}>
                회원가입
              </Button>
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

export default SignUpModal;
