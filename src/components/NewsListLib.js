import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import keys from '../config/api-key.json';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const url = `https://newsapi.org/v2/top-headlines?country=kr`;
const key = `&apiKey=${keys.news}`;

const NewsListLib = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(url + query + key);
  }, [category]);

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }
  if (response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>Error!</NewsListBlock>;
    ;
  }
  const { articles } = response.data;
  return (
    <div>
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    </div>
  );
};

export default NewsListLib;
