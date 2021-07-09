import React, { FC } from 'react';
import { kebabCase } from 'lodash';
import { LinkIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';

const HeaderLink: FC = () => {
	return (
		<LinkIcon className="w-5 h-5 inline-block ml-4 text-gray-800 group-hover:text-green-400 transition duration-200" />
	);
};

export const CustomHeaders: { [key: string]: FC } = {
	h1: (props) => (
		<Link className="group" to={`#${kebabCase(`${props.children}`)}`}>
			<h1
				className="font-extrabold text-3xl flex flex-row items-center"
				id={kebabCase(`${props.children}`)}
			>
				{props.children}
				<HeaderLink />
			</h1>
		</Link>
	),
	h2: (props) => (
		<Link className="group" to={`#${kebabCase(`${props.children}`)}`}>
			<h2
				className="font-bold text-2xl pt-8"
				id={kebabCase(`${props.children}`)}
			>
				{props.children}
				<HeaderLink />
			</h2>
		</Link>
	),
	h3: (props) => (
		<Link className="group" to={`#${kebabCase(`${props.children}`)}`}>
			<h3 className="text-xl pt-4" id={kebabCase(`${props.children}`)}>
				{props.children}
				<HeaderLink />
			</h3>
		</Link>
	),
	h4: (props) => (
		<Link className="group" to={`#${kebabCase(`${props.children}`)}`}>
			<h4 className="text-lg pt-4" id={kebabCase(`${props.children}`)}>
				{props.children}
				<HeaderLink />
			</h4>
		</Link>
	),
};
