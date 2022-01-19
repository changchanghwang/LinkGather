import React from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import Logout from '../elements/LogoutButton';
import SearchInput from '../elements/SearchInput';
import LoginModal from './LoginModal';
import PostModal from './PostModal';
import SignUpModal from './SignUpModal';
import { UserContext } from '../contextAPI/users';

const Header = (props) => {
  return (
    <Head>
      <Container>
        <Box>
          <Logo />
          <SearchInput />
          <MemberBox>
            <UserContext.Consumer>
              {(value) => {
                return value ? (
                  <Logout />
                ) : (
                  <>
                    <SignUpModal />
                    <LoginModal />
                  </>
                );
              }}
            </UserContext.Consumer>
          </MemberBox>
        </Box>
      </Container>
      <PostingContainer>
        <PostingBox>
          <div>
            <span
              style={{
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              최신순
            </span>
            <span style={{ color: '#dee2e6', margin: '0px 10px' }}>|</span>
            <span
              style={{
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              추천순
            </span>
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
export default Header;
