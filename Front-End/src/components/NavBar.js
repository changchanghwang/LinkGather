import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PostContext } from '../contextAPI/posts';
import PostModal from './PostModal';

const NavBar = (props) => {
  const { searched } = props;
  const history = useHistory();
  const { cards } = useContext(PostContext);
  const searchWord = history.location.search.split('=')[1];

  return (
    <PostingContainer>
      <PostingBox>
        {searched ? (
          <WordWrap>
            {searchWord ? (
              <>
                <strong>{searchWord}</strong>(으)로 검색한 결과입니다. ({cards.length}개)
              </>
            ) : (
              <>검색어를 입력하지 않으면 랜덤으로 카드 한장이 나옵니다.</>
            )}
          </WordWrap>
        ) : (
          <div>
            <Sort>최신순</Sort>
            <span style={{ color: '#dee2e6', margin: '0px 10px' }}>|</span>
            <Sort>추천순</Sort>
          </div>
        )}
        <PostModal />
      </PostingBox>
    </PostingContainer>
  );
};

const PostingContainer = styled.div`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 70px;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
`;
const PostingBox = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sort = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const WordWrap = styled.span`
  font-size: 14.5px;
`;

export default NavBar;
