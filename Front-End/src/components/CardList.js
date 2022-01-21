import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import { PostContext } from '../contextAPI/posts';
import TopButton from '../elements/TopButton';
import Card from './Card';

const CardList = (props) => {
  //useContext
  const { cards } = useContext(PostContext);
  console.log('asdf', cards[0]);

  return (
    <Grid>
      <TopButton />
      {cards.map((card, i) => {
        return (
          <CardBg key={i}>
            <Card card={card} />
          </CardBg>
        );
      })}
    </Grid>
  );
};

const CardBg = styled.div`
  margin-bottom: 32px;
  border-radius: 5px;
  cursor: pointer;
`;

export default CardList;
