import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import { PostContext } from '../contextAPI/posts';
import { getPostApi } from '../axios/axios';
import styled from 'styled-components';

const Main = (props) => {
  const [cards, setCards] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const setPosts = async () => {
    const res = await getPostApi();
    setCards(res.data.posts);
    setLoading(true);
  };

  const updateLike = (id) => {
    const card = cards.filter((v, i) => v.id === id)[0];
  };

  useEffect(() => {
    setPosts();
  }, []);

  return (
    <PostContext.Provider value={{ cards, setPosts }}>
      {loading ? (
        <>
          <Header />
          <CardList />
        </>
      ) : (
        <Spinner />
      )}
    </PostContext.Provider>
  );
};

const Spinner = styled.img`
  width: 100%;
  height: 100%;
`;

export default Main;
