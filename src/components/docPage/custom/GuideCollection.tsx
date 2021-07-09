import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { string } from 'yargs';
import { CustomHeaders } from '../../docContent/headers';

export interface ICollectionData {
	allMdx: {
		edges: {
			node: {
				id: string;
				fields: {
					slug: string;
				};
				slug: string;
				timeToRead: number;
				frontmatter: {
					title: string;
				};
				excerpt: string;
			};
		}[];
	};
}

export const Collection: FC<{ data: ICollectionData }> = ({ data }) => {
	const CustomH2 = CustomHeaders['h2'];

	const nodes = data.allMdx.edges;

	return (
		<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
			<div>
				<CustomH2>Hi</CustomH2>
				<div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
					<p className="text-gray-300">
						Get weekly articles in your inbox on how to grow your
						business.
					</p>
				</div>
			</div>
			<div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
				{nodes.map(({ node }) => (
					<div key={node.id}>
						<a href="#" className="mt-2 block">
							<p className="text-xl font-semibold text-gray-100">
								{node?.frontmatter?.title}
							</p>
							<p className="mt-3 text-base text-gray-500">
								{node.excerpt}
							</p>
						</a>
						<div className="mt-3">
							<a
								href={'/' + node.slug}
								className="text-base font-semibold text-green-600 hover:text-green-500"
							>
								Read full story
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
