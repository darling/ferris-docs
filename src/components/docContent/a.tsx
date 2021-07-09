import { Link } from 'gatsby';
import React, { FC } from 'react';

export const CustomLink: FC<{ href?: string }> = (props) => {
	if (props.href.startsWith('http'))
		return (
			<a
				href={props.href}
				className="text-green-600 bg-green-100 px-1 hover:text-green-800 hover:bg-green-300"
			>
				{props.children}
			</a>
		);
	return (
		<Link
			to={props?.href}
			className="text-green-600 bg-green-100 px-1 hover:text-green-800 hover:bg-green-300"
		>
			{props.children}
		</Link>
	);
};
