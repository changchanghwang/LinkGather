import React from 'react';
import Button from '../elements/button';
import CloseButton from '../elements/CloseButton';
import Input from '../elements/Input';
import Title from '../elements/Title';
import ModalBackground from './Modal';

const SignUpModal = (props) => {
  const { isOpen } = props;
  return isOpen ? (
    <ModalBackground>
      <Title text={'회원가입'} />
      <CloseButton />
      <>
        <Input label={'이름'} text={'홍길동'} />
        <Input label={'이메일'} text={'example@example.com'} />
        <Input label={'패스워드'} text={'password'} isPassword={true} />
        <Input
          label={'패스워드 확인'}
          text={'password check'}
          isPassword={true}
        />
        <Button isFill={false}>회원가입</Button>
      </>
    </ModalBackground>
  ) : null;
};

export default SignUpModal;
