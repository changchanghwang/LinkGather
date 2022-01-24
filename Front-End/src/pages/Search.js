import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import Loader from 'react-spinners/PacmanLoader';
import { searchApi } from '../axios/axios';

const Search = (props) => {
  const [cards, setCards] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const setPosts = async () => {
    const res = await searchApi();
    setCards(res.data.posts);
    setLoading(true);
  };

  useEffect(() => {
    setPosts();
  }, []);
  return loading ? (
    <>
      <Header />
      <CardList />
    </>
  ) : (
    <>
      <Header />
      <Loader css={{ position: 'absolute', top: '50%', left: '50%' }} />
    </>
  );
};

export default Search;
