import React, { useState } from 'react';
import Button from '../elements/button';
import Input from '../elements/Input';
import Title from '../elements/Title';
import styled from 'styled-components';
import { signUpApi } from '../axios/axios';
import { validatePassword } from '../util/passwordValidator';

const SignUpModal = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [open, setOpen] = useState(false);
  const [idErr, setIdErr] = useState(false);
  const [emailDupErr, setEmailDupErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordCheckErr, setPasswordCheckErr] = useState(false);
  const handleSignUpModal = (e) => {
    if (e.target.className.includes('handleModal')) {
      setOpen(!open);
      setIdErr(false);
      setEmailDupErr(false);
      setPasswordErr(false);
      setPasswordCheckErr(false);
    }
  };

  const SignUp = async () => {
    const data = {
      email,
      name,
      password,
      passwordCheck,
    };
    if (validatePassword(password, passwordCheck)) {
      const res = await signUpApi(data);
      if (res.status === 200) {
        alert('회원가입이 완료되었습니다');
        setOpen(!open);
      } else if (res.status === 400) {
        if (res.data.msg === '이메일이 중복됩니다.') {
          setEmailDupErr(true);
        }
      }
    }
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
                isErr={idErr}
                ErrText={'아이디를 확인해주세요'}
              />
              <Input
                label={'이메일'}
                text={'example@example.com'}
                _onChange={(e) => setEmail(e.target.value)}
                isErr={emailDupErr}
                ErrText={'이메일이 중복됩니다.'}
              />
              <Input
                label={'패스워드'}
                text={'********'}
                isPassword={true}
                _onChange={(e) => setPassword(e.target.value)}
                isErr={passwordErr}
                ErrText={'패스워드를 확인해주세요'}
              />
              <Input
                label={'패스워드 확인'}
                text={'********'}
                isPassword={true}
                _onChange={(e) => setPasswordCheck(e.target.value)}
                isErr={passwordCheckErr}
                ErrText={'패스워드를 확인해주세요'}
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
