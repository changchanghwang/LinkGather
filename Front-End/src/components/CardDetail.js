import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import CloseButton from '../elements/CloseButton';

const CardDetail = (props) => {
  const { _onClick, card } = props;

  //state
  const [editClick, setEditClick] = useState(false);
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  //에러 state
  const [urlNull, setUrlNull] = useState(false);
  const [titleNull, setTitleNull] = useState(false);
  const [descNull, setDescNull] = useState(false);

  //ref
  const urlRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  //onChange
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

  //edit layout
  const editLayout = () => {
    setEditClick(!editClick);
  };

  return (
    <GrayBackground className="handleModal" onClick={_onClick}>
      <PopUpWrap>
        <CloseButton />
        <ButtonWrap>
          {editClick ? (
            <EditButton onClick={editLayout}>수정 취소</EditButton>
          ) : (
            <>
              <EditButton onClick={editLayout}>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </>
          )}
        </ButtonWrap>
        <Image src={card?.image} alt="" />
        {editClick ? (
          <>
            <InputWrap>
              <Label>웹 사이트 URL</Label>
              <div style={{ display: 'flex' }}>
                <PreviewInput
                  placeholder="https://www.linkgather.com"
                  ref={urlRef}
                  onChange={urlChange}
                />
                <Preview>이미지 미리보기</Preview>
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
            <Button isFill={false}>수정하기</Button>
          </>
        ) : (
          <DetailWrap>
            <p>{card?.title}</p>
            <span>{card?.desc}</span>
          </DetailWrap>
        )}
      </PopUpWrap>
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
  max-height: 650px;
  z-index: 10;
  width: 520px;
  padding: 30px 40px;
  background-color: #fff;
  overflow-y: scroll;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const EditButton = styled.button`
  color: #339af0;
  border: 1px solid #339af0;
  cursor: pointer;
  padding: 8px 12px;
  background-color: transparent;
`;

const DeleteButton = styled.button`
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
  cursor: pointer;
  background-color: transparent;
  margin-left: 15px;
  padding: 8px 12px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  margin-bottom: 20px;
  object-fit: cover;
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

const DetailWrap = styled.div`
  & p {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.6px;
  }
`;

export default CardDetail;
