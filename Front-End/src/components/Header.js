import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import Logout from '../elements/LogoutButton';
import SearchInput from '../elements/SearchInput';
import LoginModal from './LoginModal';
import PostModal from './PostModal';
import SignUpModal from './SignUpModal';
import { UserContext } from '../contextAPI/users';
import MyPageButton from '../elements/MyPage';

const Header = (props) => {
  let { isLogin } = useContext(UserContext);
  // const [recentClcik, setRecentClick] = useState(false);
  // const [recomendClcik, setRecomendClcik] = useState(false);

  return (
    <Head>
      <Container>
        <Box>
          <Logo />
          <SearchInput />
          <MemberBox>
            {isLogin ? (
              <>
                <MyPageButton />
                <Logout />
              </>
            ) : (
              <>
                <SignUpModal />
                <LoginModal />
              </>
            )}
          </MemberBox>
        </Box>
      </Container>
      <PostingContainer>
        <PostingBox>
          <div>
            <Sort>최신순</Sort>
            <span style={{ color: '#dee2e6', margin: '0px 10px' }}>|</span>
            <Sort>추천순</Sort>
          </div>
          <PostModal />
        </PostingBox>
      </PostingContainer>
    </Head>
  );
};

const Head = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #000;
`;

const MemberBox = styled.div`
  flex: 1;
  display: flex;
  font-size: 14px;
  justify-content: flex-end;
  align-items: center;
`;

const PostingContainer = styled.div`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
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

export default Header;
