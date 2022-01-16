import React, { useState } from 'react';
import Title from '../elements/Title';
import styled from 'styled-components';
import Input from '../elements/Input';
import Button from '../elements/button';
import PreviewButton from '../elements/PreviewButton';

const PostModal = (props) => {
  const [open, setOpen] = useState(false);
  const handlePostModal = (e) => {
    if (e.target.className.includes('handleModal')) {
      setOpen(!open);
    }
  };
  return (
    <>
      <div
        className="handleModal"
        style={{ height: '70px', display: 'flex', alignItems: 'center' }}
        onClick={handlePostModal}
      >
        등록
      </div>
      {open ? (
        <GrayBackground className="handleModal" onClick={handlePostModal}>
          <PopUpWrap>
            <Title text={'등록하기'} />
            <Close className="handleModal" onClick={handlePostModal}>
              닫기
            </Close>
            <>
              <div style={{ display: 'flex' }}>
                <Input
                  label={'웹 사이트 URL'}
                  text={'https://www.linkgather.com'}
                  isPreview={true}
                />
              </div>
              <Input label={'제목'} text={'제목을 입력해주세요'} />
              <Input
                label={'설명'}
                text={'사이트에 대한 간략한 설명을 입력해주세요'}
              />
              <Button isFill={false}>등록하기</Button>
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

export default PostModal;
