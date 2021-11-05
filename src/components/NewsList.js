import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%auto;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const sampleArticle = {
	title: 'Title',
	description: 'DESC',
	url: '',
	urlToImage: 'http://image.jpg',
};

const NewsList = () => {
	return (
		<div>
			<NewsListBlock>
				<NewsItem article={sampleArticle} />
				<NewsItem article={sampleArticle} />
				<NewsItem article={sampleArticle} />
			</NewsListBlock>
		</div>
	);
};

export default NewsList;
