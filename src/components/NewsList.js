import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

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

const NewsList = ({ url }) => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const r = await axios.get(url);
				console.log(r);
				setArticles(r.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

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
