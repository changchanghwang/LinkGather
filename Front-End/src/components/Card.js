import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as EmptyHeart } from '../images/emptyHeart.svg';
import { ReactComponent as FillHeart } from '../images/fillHeart.svg';
import { FiThumbsUp } from 'react-icons/fi';
import LikeCountImg from '../images/likeCount.png';
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import { PostContext } from '../contextAPI/posts';
import TopButton from '../elements/TopButton';

const Card = (props) => {
  const [Dib, setDib] = useState(false);
  const handleDib = () => {
    setDib(!Dib);
  };
  const { cards } = useContext(PostContext);
  return (
    <Grid>
      <TopButton />
      {cards.map((card, i) => {
        return (
          <CardBg key={i}>
            <div>
              <ImgHidden>
                <img src={card.image} alt="" />
                <Jjim onClick={handleDib}>{Dib ? <FillHeart /> : <EmptyHeart />}</Jjim>
              </ImgHidden>
              <Title>{card.title}</Title>
              <CountWrap>
                <img src={LikeCountImg} alt="" />
                <span>{card.likeNum}</span>
              </CountWrap>
              <hr />
              <ButtonWrap>
                <Button isFill={true}>
                  <FiThumbsUp style={{ width: '16px', height: '16px' }} />
                  <span>추천하기</span>
                </Button>
                <Button isFill={true} url={card.url}>
                  <span>바로가기</span>
                </Button>
              </ButtonWrap>
            </div>
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

const ImgHidden = styled.div`
  overflow: hidden;
  justify-content: center;
  height: 155px;
  align-items: center;
  display: flex;
  position: relative;
  & img {
    height: 155px;
    object-fit: cover;
    width: 100%;
    border-radius: 3px;
    margin-bottom: 8px;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease 0s, opacity 0.1s linear 0s !important;
    }
  }
`;

const Jjim = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  cursor: pointer;
  filter: drop-shadow(rgba(41, 42, 43, 0.2) 0px 1px 3px)
    drop-shadow(rgba(0, 0, 0, 0.2) 0px 0px 0.5px);
  &:hover {
    background-color: rgb(239, 239, 239, 0.1);
    transition: background-color 0.3s ease 0s;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: rgb(26, 26, 26);
  height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 4px 0px 6px;
`;

const CountWrap = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px 8px 0px 0px;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(162, 162, 162);
  & img {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 0 0 auto;
    height: 12px;
    margin-right: 2px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  justify-content: space-between;
`;

export default Card;
