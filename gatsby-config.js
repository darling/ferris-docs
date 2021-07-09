module.exports = {
	siteMetadata: {
		siteUrl: 'https://docs.ferris.gg',
		title: 'Ferris Docs',
		description: 'Documentation for a great Discord bot.',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/img/icon.png',
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				defaultLayouts: {
					default: require.resolve('./src/templates/markdown.tsx'),
				},
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: './src/img/',
			},
			__key: 'img',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'docs',
				path: './docs',
			},
			__key: 'docs',
		},
	],
};
