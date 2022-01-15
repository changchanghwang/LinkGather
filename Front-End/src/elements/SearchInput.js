import React from 'react';
import styled from 'styled-components';

const SearchInput = (props) => (
  <Search type="text" placeholder="검색어를 입력하세요" />
);

const Search = styled.input`
  width: 260px;
  height: 40px;
  padding-left: 20px;
  outline: none;
  border-radius: 22px;
`;

export default SearchInput;
