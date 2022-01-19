import React from 'react';
import styled from 'styled-components';

const Logout = (props) => {
  const logout = () => {
    localStorage.removeItem('token');
  };
  return <LogoutButton onClick={logout}>로그아웃</LogoutButton>;
};

const LogoutButton = styled.div`
  color: #fff;
  margin-left: 40px;
  cursor: pointer;
`;

export default Logout;
