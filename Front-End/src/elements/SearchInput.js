import React from 'react';
import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';

const SearchInput = (props) => {
  return (
    <>
      <Search type="text" placeholder="검색어 입력" />
      <SearchIcon>
        <GrSearch />
      </SearchIcon>
    </>
  );
};

const Search = styled.input`
  width: 260px;
  height: 34px;
  padding-left: 20px;
  outline: none;
  border-radius: 22px;
`;

const SearchIcon = styled.div`
  margin-left: -30px;
  cursor: pointer;
`;

export default SearchInput;
