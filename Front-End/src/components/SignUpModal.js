import React, { useEffect, useRef, useState } from 'react';
import Button from '../elements/button';
import Title from '../elements/Title';
import styled from 'styled-components';
import { signUpApi } from '../axios/axios';
import { validatePassword } from '../util/passwordValidator';
import { validateEmail } from '../util/emailValidator';

const SignUpModal = (props) => {
  //modal state
  const [open, setOpen] = useState(false);

  //회원가입 정보
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);

  //에러처리
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [emailDupErr, setEmailDupErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordCheckErr, setPasswordCheckErr] = useState(false);

  //Ref
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  //이메일 확인
  useEffect(() => {
    console.log(email);
    if (!validateEmail(email) || !email) {
      setEmailErr(true);
      setEmailDupErr(false);
    } else if (emailDupErr) {
      setEmailErr(false);
      setEmailDupErr(true);
    } else {
      setEmailErr(false);
      setEmailDupErr(false);
    }
  }, [email]);

  //패스워드 확인
  useEffect(() => {
    if (!validatePassword(password, passwordCheck) || !password || !passwordCheck) {
      setPasswordCheckErr(true);
    } else {
      setPasswordCheckErr(false);
    }
  }, [passwordCheck]);

  //input onChange event
  const nameChange = (e) => {
    const N = e.target.value;
    setName(N);
  };
  const emailChange = (e) => {
    const mail = e.target.value;
    setEmail(mail);
  };
  const passwordChange = (e) => {
    const pw = e.target.value;
    setPassword(pw);
  };
  const passwordCheckChange = (e) => {
    const pwCheck = e.target.value;
    setPasswordCheck(pwCheck);
  };

  //handle signup modal
  const handleSignUpModal = (e) => {
    if (e.target.className.includes('handleModal')) {
      setOpen(!open);
      setNameErr(false);
      setEmailDupErr(false);
      setEmailErr(false);
      setPasswordErr(false);
      setPasswordCheckErr(false);
    }
  };

  //signup submit
  const SignUp = async () => {
    const data = {
      name,
      email,
      password,
      passwordCheck,
    };
    const res = await signUpApi(data);
    if (res.status === 200) {
      alert('회원가입 성공');
      setOpen(!open);
    } else if (res.status === 400) {
      if (res.data.msg === '이메일이 중복됩니다.') {
        setEmailDupErr(true);
      }
    }
  };

  return (
    <>
      <div className="handleModal" style={{ color: '#fff', cursor: 'pointer' }} onClick={handleSignUpModal}>
        회원가입
      </div>
      {open ? (
        <GrayBackground className="handleModal" onClick={handleSignUpModal}>
          <PopUpWrap>
            <Title text={'회원가입'} />
            <Close className="handleModal" onClick={handleSignUpModal}>
              닫기
            </Close>

            <InputWrap>
              <Label>이름</Label>
              <InputEl type="text" placeholder="홍길동" ref={nameRef} onChange={nameChange} />
              {nameErr ? <ErrMessage>이름을 확인해주세요</ErrMessage> : null}
            </InputWrap>

            <InputWrap>
              <Label>이메일</Label>
              <InputEl type="text" placeholder="example@example.com" ref={emailRef} onChange={emailChange} />
              {emailDupErr ? <ErrMessage>중복된 이메일입니다.</ErrMessage> : null}
              {emailErr ? <ErrMessage>이메일을 확인해주세요</ErrMessage> : null}
            </InputWrap>

            <InputWrap>
              <Label>패스워드</Label>
              <InputEl type="password" placeholder="********" ref={passwordRef} onChange={passwordChange} />
              {passwordErr ? <ErrMessage>패스워드를 확인해주세요</ErrMessage> : null}
            </InputWrap>

            <InputWrap>
              <Label>패스워드 확인</Label>
              <InputEl type="password" placeholder="********" ref={passwordCheckRef} onChange={passwordCheckChange} />
              {passwordCheckErr ? <ErrMessage>패스워드를 확인해주세요</ErrMessage> : null}
            </InputWrap>

            <Button isFill={false} _onClick={SignUp}>
              회원가입
            </Button>
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

const InputWrap = styled.div`
  margin-bottom: 20px;
`;

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

const ErrMessage = styled.span`
  font-size: 0.6em;
  color: rgb(226, 91, 69);
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
