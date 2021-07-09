import React, { FC } from 'react';
import { startCase } from 'lodash';
import { Link } from 'gatsby';

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

interface Props {
	title: string;
	tableOfContents?: tableElement;
}

interface tableElement {
	url: string;
	title: string;
	items?: tableElement[];
}

export const TableDocNavBar: FC<Props> = (props) => {
	console.log('nav', props);

	return (
		<div>
			{(props.tableOfContents.items?.length || 0) > 0 ? (
				<>
					<span className="text-gray-200 uppercase text-sm">
						On this page
					</span>
					<nav className="space-y-1" aria-label="Sidebar">
						{props.tableOfContents.items.map((item) => {
							return (
								<Link
									key={item.url}
									to={`${item.url}`}
									id={`${item.url.replace('#', '')}`}
									className={classNames(
										false
											? 'bg-gray-100 text-gray-900'
											: 'text-gray-600  hover:text-green-500',
										'flex items-center py-2 text-sm font-medium rounded-md transition duration-200 active:text-green-500'
									)}
									aria-current={
										item.title ? 'page' : undefined
									}
								>
									<span className="truncate">
										{startCase(item.title)}
									</span>
								</Link>
							);
						})}
						{/* {navigation.map((item) => (
				<a
					key={item.name}
					href={`#${item.href}`}
					className={classNames(
						item.current
							? 'bg-gray-100 text-gray-900'
							: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
						'flex items-center px-3 py-2 text-sm font-medium rounded-md'
					)}
					aria-current={item.current ? 'page' : undefined}
				>
					<span className="truncate">{capitalize(item.name)}</span>
				</a>
			))} */}
					</nav>
				</>
			) : (
				<></>
			)}
		</div>
	);
};
