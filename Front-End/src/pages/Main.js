import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import { PostContext } from '../contextAPI/posts';
import { getPostApi } from '../axios/axios';

const Main = (props) => {
  const [cards, setCards] = useState([{}]);
  const setPosts = async () => {
    const res = await getPostApi();
    setCards(res.data.posts);
  };

  useEffect(() => {
    setPosts();
  }, []);

  return (
    <PostContext.Provider value={{ cards, setPosts }}>
      <Header />
      <CardList />
    </PostContext.Provider>
  );
};

export default Main;
