import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import keys from '../config/api-key.json';

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

const url = `https://newsapi.org/v2/top-headlines?country=kr`;
const key = `&apiKey=${keys.news}`;

const NewsList = ({ category }) => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = category === 'all' ? '' : `&category=${category}`;
				const r = await axios.get(url + query + key);
				console.log(r);
				setArticles(r.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]);

	if (loading) {
		return <NewsListBlock>Loading...</NewsListBlock>;
	}
	if (!articles) {
		return <NewsListBlock>No Articles</NewsListBlock>;
	}
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

export default NewsList;
