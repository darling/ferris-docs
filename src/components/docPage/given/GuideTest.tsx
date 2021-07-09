import { Collection } from './../custom/GuideCollection';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

export const GuideCollection = () => {
	const data = useStaticQuery(graphql`
		query GetCategory {
			allMdx(filter: { slug: { regex: "/^(guides)//g" } }, limit: 3) {
				edges {
					node {
						id
						slug
						fields {
							slug
						}
						timeToRead
						frontmatter {
							title
						}
						excerpt(truncate: true, pruneLength: 50)
					}
				}
			}
		}
	`);

	return <Collection data={data} />;
};
