const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require('slugify');

const DEFAULT_BASE_PATH = '/';

const getBasePath = (bp = DEFAULT_BASE_PATH) => {
	if (bp === '' || bp === '.' || bp === './') {
		return DEFAULT_BASE_PATH;
	} else {
		return bp;
	}
};

exports.onCreateNode = async ({ node, actions, getNode }, options) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const slug = createFilePath({
			node,
			getNode,
			trailingSlash: false,
		});
		const pathSlug = path.join(getBasePath(options.basePath), slug);
		createNodeField({
			name: `slug`,
			node,
			value: pathSlug,
		});
	}
};

exports.createPages = async ({ graphql, actions }, options) => {
	const { createPage } = actions;
	const basePath = getBasePath(options.basePath);

	const mdxDocs = await graphql(`
		{
			allDocs: allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							author
							title
						}
						excerpt(pruneLength: 30, truncate: true)
					}
				}
			}
		}
	`);

	if (mdxDocs.errors) {
		throw mdxDocs.errors;
	}

	const { allDocs } = mdxDocs.data;

	const docsData = allDocs.edges;

	docsData.forEach((doc, index) => {
		// const prev =
		// 	index === docsData.length - 1 ? null : docsData[index + 1].node;
		// const next = index === 0 ? null : docsData[index - 1].node;
		const slug = doc.node.fields.slug.replace(/\\/g, '/');
		createPage({
			path: slug || '/',
			component: path.join(__dirname, './src/templates', 'markdown.tsx'),
			context: {
				id: doc.node.id,
				basePath,
				node: doc.node,
				frontmatter: doc.node.frontmatter,
			},
		});
	});

	// createPage({
	//     path: path.join('404'),
	//     component: path.join(__dirname, './src/templates', 'markdown.tsx'),
	//     context: {
	//       tags: slugifiedTags,
	//       hasUntagged,
	//       basePath,
	//     },
	//   })
};
