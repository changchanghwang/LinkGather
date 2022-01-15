import React from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import SearchInput from '../elements/SearchInput';
import SignUpModal from './SignUp';

const Header = (props) => {
  return (
    <Head>
      <Container>
        <Logo />
        <SearchInput />
        <SignUpModal />
      </Container>
    </Head>
  );
};

const Head = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #000;
  display: flex;
`;

const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export default Header;
