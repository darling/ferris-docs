import React, { FC } from 'react';
import { Footer } from './default/Footer';
import { Header } from './default/Header';

const Layout: FC = (props) => {
	return (
		<>
			<Header />
			<div className="min-h-screen bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-200 space-y-4 md:space-y-6">
					{props.children}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
