import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { CustomLink } from '../components/docContent/a';
import { CustomHeaders } from '../components/docContent/headers';
import { DocHeading } from '../components/docPage/Heading';
import { TableDocNavBar } from '../components/docPage/TableOfContentsBar';

const MarkdownProviderStyle = (props: any) => {
	console.log(props);

	const { body, frontmatter, tableOfContents } = props?.data?.mdx;

	return (
		<MDXProvider
			components={{
				a: CustomLink,
				...CustomHeaders,
			}}
		>
			<div className="py-6">
				<div className="max-w-3xl mx-auto lg:max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8">
					<main className="lg:col-span-8 xl:col-span-8 overflow-hidden">
						<DocHeading
							author={frontmatter?.author}
							url={props.uri}
						>
							{frontmatter?.title}
						</DocHeading>
						<div className="mt-8 space-y-4 break-words">
							<MDXRenderer>{body}</MDXRenderer>
						</div>
					</main>
					<aside className="hidden lg:block md:col-span-4">
						<div className="sticky top-6 space-y-4 ">
							<TableDocNavBar
								title={frontmatter?.title}
								tableOfContents={tableOfContents}
							/>
							<div>
								<img
									className="w-32 h-32 hover:animate-pulse"
									src="/img/documentation-chan.svg"
									alt=""
								/>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</MDXProvider>
	);
};

export const pageQuery = graphql`
	query DocById($id: String!) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
				author
			}
			fields {
				slug
			}
			tableOfContents(maxDepth: 3)
		}
	}
`;

export default MarkdownProviderStyle;
