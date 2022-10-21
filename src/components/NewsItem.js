import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  margin-top: 1rem;

  .thumbnail {
    margin-right: 1rem;
    margin-top: 1rem;

    img {
      display: block;
      width: 120px;
      height: 80px;
      object-fit: cover;
    }
  }

  .contents {
    h3 {
      margin: 0;

      a {
        color: black;
      }
    }

    p {
      font-size: 0.8rem;
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div>
      <NewsItemBlock>
        {urlToImage && (
          <div className='thumbnail'>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <img src={urlToImage} alt='thumbnail' />
            </a>
          </div>
        )}
        <div className='contents'>
          <h3>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              {title}
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </NewsItemBlock>
    </div>
  );
};

export default NewsItem;
