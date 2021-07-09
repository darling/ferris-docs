import './src/css/index.css';
import '@fontsource/inter';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-slab';
import Layout from './src/components/layout';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>;
};
