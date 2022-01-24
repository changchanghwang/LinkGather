import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import { PostContext } from '../contextAPI/posts';
import { getPostApi } from '../axios/axios';
import Loader from 'react-spinners/PacmanLoader';

const Main = (props) => {
  const [cards, setCards] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const setPosts = async () => {
    const res = await getPostApi();
    setCards(res.data.posts);
    setLoading(true);
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
        <>
          <Header />
          <Loader css={{ position: 'absolute', top: '50%', left: '50%' }} />
        </>
      )}
    </PostContext.Provider>
  );
};

export default Main;
