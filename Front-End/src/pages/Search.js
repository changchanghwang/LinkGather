import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import Loader from 'react-spinners/PacmanLoader';
import { searchApi } from '../axios/axios';
import { PostContext } from '../contextAPI/posts';
import { useHistory } from 'react-router-dom';

const Search = (props) => {
  const [cards, setCards] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const setPosts = async () => {
    const res = await searchApi(history.location?.search?.split('=')[1]);
    if (res.status === 200) {
      setCards(res.data.posts);
      setLoading(true);
    } else {
      console.log(res);
    }
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

export default Search;
