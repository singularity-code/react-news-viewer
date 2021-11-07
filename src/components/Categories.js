import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
	{
		name: 'all',
		text: 'ALL',
	},
	{
		name: 'business',
		text: 'BUSINESS',
	},
	{
		name: 'entertainment',
		text: 'ENTERTAINMENT',
	},
	{
		name: 'health',
		text: 'HEALTH',
	},
	{
		name: 'science',
		text: 'SCIENCE',
	},
	{
		name: 'sport',
		text: 'SPORT',
	},
	{
		name: 'technology',
		text: 'TECHNOLOGY',
	},
];

const CategoryBlock = styled.div`
	display: flex;
	padding: 1rem;
	width: 768px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
	}
`;

const Category = styled.div`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;

	&:hover {
		color: #495057;
	}

	${(props) =>
		props.active &&
		css`
			font-weight: 600;
			border-bottom: 2px solid #ff6600;
			color: #ff6600;
			&:hover {
				color: #3bc9db;
			}
		`}

	& + & {
		margin-left: 1rem;
	}
`;

const Categories = ({ category, onSelect }) => {
	return (
		<div>
			<CategoryBlock>
				{categories.map((c) => (
					<Category
						key={c.name}
						active={category === c.name}
						onClick={() => onSelect(c.name)}
					>
						{c.text}
					</Category>
				))}
			</CategoryBlock>
		</div>
	);
};

export default Categories;
