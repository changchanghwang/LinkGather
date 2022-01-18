import React, { useState } from 'react';
import Title from '../elements/Title';
import styled from 'styled-components';
import Button from '../elements/button';

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
        style={{
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
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
              <InputWrap>
                <Label>웹 사이트 URL</Label>
                <div style={{ display: 'flex' }}>
                  <PreviewInput placeholder="https://www.linkgather.com" />
                  <Preview>이미지 미리보기</Preview>
                </div>
              </InputWrap>

              <InputWrap>
                <Label>제목</Label>
                <InputEl type="text" placeholder="제목을 입력해주세요" />
              </InputWrap>

              <InputWrap>
                <Label>설명</Label>
                <InputEl type="text" placeholder="사이트에 대한 간략한 설명을 입력해주세요" />
                <Button isFill={false}>등록하기</Button>
              </InputWrap>
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

const PreviewInput = styled.input`
  padding: 15px 10px;
  border: 1px solid #dee2e6;
  border-radius: 3px 0px 0px 3px;
  width: 198px;
`;

const Preview = styled.button`
  width: 150px;
  padding: 15px 10px;
  color: #fff;
  background: #000;
  border: 0;
  border-radius: 0px 3px 3px 0px;
  cursor: pointer;
`;

const InputEl = styled.input`
  padding: 15px 10px;
  border: 1px solid #dee2e6;
  border-radius: 3px;
  width: 350px;
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
