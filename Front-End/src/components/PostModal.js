import React, { useState, useContext, useRef, useEffect } from 'react';
import Title from '../elements/Title';
import Button from '../elements/button';
import styled from 'styled-components';
import { UserContext } from '../contextAPI/users';
import { previewApi, submitPostApi } from '../axios/axios';
import { PostContext } from '../contextAPI/posts';

const PostModal = (props) => {
  //modal state
  const [open, setOpen] = useState(false);

  //포스트 정보 state
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [preview, setPreview] = useState(null);

  //에러 state
  const [urlNull, setUrlNull] = useState(false);
  const [titleNull, setTitleNull] = useState(false);
  const [descNull, setDescNull] = useState(false);

  //context api
  const { isLogin } = useContext(UserContext);
  const { setPosts } = useContext(PostContext);

  //ref
  const urlRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  //input onChange event
  const urlChange = (e) => {
    const URL = e.target.value;
    setUrl(URL);
  };

  const titleChange = (e) => {
    const TITLE = e.target.value;
    setTitle(TITLE);
  };

  const descChange = (e) => {
    const DESC = e.target.value;
    setDesc(DESC);
  };

  //modal controll
  const handlePostModal = (e) => {
    if (e.target.className.includes('handleModal') && isLogin) {
      setOpen(!open);
      setUrl(null);
      setTitle(null);
      setDesc(null);
      setPreview(null);
      setUrlNull(false);
      setTitleNull(false);
      setDescNull(false);
    } else if (!isLogin) {
      alert('로그인 해주세요');
    }
  };

  //preview image
  const getPreview = async () => {
    if (!url) {
      setUrlNull(true);
      urlRef.current.focus();
      return;
    }
    const res = await previewApi(url);
    if (res.status === 200) {
      setPreview(res.data.image);
      setUrlNull(false);
      setTitleNull(false);
      setDescNull(false);
    } else {
      console.log(res);
    }
  };

  //submit post
  const submitPost = async () => {
    const data = {
      url,
      title,
      desc,
    };
    if (!url) {
      setUrlNull(true);
      setTitleNull(false);
      setDescNull(false);
      urlRef.current.focus();
      return;
    }
    if (!title) {
      setUrlNull(false);
      setTitleNull(true);
      setDescNull(false);
      titleRef.current.focus();
      return;
    }
    if (!desc) {
      setUrlNull(false);
      setTitleNull(false);
      setDescNull(true);
      descRef.current.focus();
      return;
    }
    const res = await submitPostApi(data);
    if (res.status === 200) {
      alert('등록되었습니다.');
      setOpen(false);
      setUrl(null);
      setTitle(null);
      setDesc(null);
      setPreview(null);
      setUrlNull(false);
      setTitleNull(false);
      setDescNull(false);
      await setPosts();
    } else {
      console.log(res);
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
            {preview ? <PreviewImage src={preview} alt="" /> : null}
            <>
              <InputWrap>
                <Label>웹 사이트 URL</Label>
                <div style={{ display: 'flex' }}>
                  <PreviewInput
                    placeholder="https://www.linkgather.com"
                    ref={urlRef}
                    onChange={urlChange}
                  />
                  <Preview onClick={getPreview}>이미지 미리보기</Preview>
                </div>
                {urlNull ? <ErrMessage>url을 입력해주세요</ErrMessage> : null}
              </InputWrap>

              <InputWrap>
                <Label>제목</Label>
                <InputEl
                  type="text"
                  placeholder="제목을 입력해주세요"
                  ref={titleRef}
                  onChange={titleChange}
                />
                {titleNull ? <ErrMessage>제목을 입력해주세요</ErrMessage> : null}
              </InputWrap>

              <InputWrap>
                <Label>설명</Label>
                <Desc
                  type="text"
                  placeholder="사이트에 대한 간략한 설명을 입력해주세요"
                  ref={descRef}
                  onChange={descChange}
                />
                {descNull ? <ErrMessage>간단한 설명을 입력해주세요</ErrMessage> : null}
              </InputWrap>
              <Button isFill={false} _onClick={submitPost}>
                등록하기
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
  max-height: 650px;
  z-index: 10;
  width: 520px;
  padding: 30px 40px;
  background-color: #fff;
  overflow-y: scroll;
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

const PreviewImage = styled.img`
  width: 100%;
  max-height: 300px;
  margin-bottom: 20px;
  object-fit: cover;
`;

const PreviewInput = styled.input`
  padding: 15px 10px;
  border: 1px solid #dee2e6;
  border-radius: 3px 0px 0px 3px;
  width: 348px;
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
  width: 498px;
`;

const Desc = styled.textarea`
  padding: 15px 10px;
  border: 1px solid #dee2e6;
  border-radius: 3px;
  width: 498px;
  height: 100px;
  resize: none;
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

export default PostModal;
