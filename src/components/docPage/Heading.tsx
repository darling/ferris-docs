/* This example requires Tailwind CSS v2.0+ */
import {
	CalendarIcon,
	ChevronRightIcon,
	UserIcon,
} from '@heroicons/react/solid';
import { Link } from 'gatsby';
import { capitalize, compact, drop, take } from 'lodash';
import React, { FC, Fragment } from 'react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export const DocHeading: FC<{
	author?: string;
	lastUpdated?: Date;
	url?: string;
}> = ({ url = '/', lastUpdated, author, children }) => {
	const slugWNoEmpty = compact(drop(url.split('/'), 1));

	return (
		<div className="lg:flex lg:items-center lg:justify-between">
			<div className="flex-1 min-w-0">
				<nav
					className={classNames(url == '/' ? 'hidden' : '', 'flex')}
					aria-label="Breadcrumb"
				>
					<ol className="flex items-center space-x-4" role="list">
						<li>
							<div>
								<Link
									to="/"
									className="text-sm font-medium text-gray-300 hover:text-white"
								>
									Home
								</Link>
							</div>
						</li>
						{slugWNoEmpty.map((slugElement, index) => (
							<li key={slugElement}>
								<div className="flex items-center">
									<ChevronRightIcon
										className="flex-shrink-0 h-5 w-5 text-gray-500"
										aria-hidden="true"
									/>
									<Link
										to={`/${take(
											slugWNoEmpty,
											index + 1
										).join('/')}`}
										className="ml-4 text-sm font-medium text-gray-300 hover:text-white"
									>
										{capitalize(slugElement)}
									</Link>
								</div>
							</li>
						))}
					</ol>
				</nav>
				<h1 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
					{children || 'No Title Given'}
				</h1>
				<div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
					{author ? (
						<div className="mt-2 flex items-center text-sm text-gray-300">
							<UserIcon
								className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
								aria-hidden="true"
							/>
							{author}
						</div>
					) : (
						<></>
					)}
					{lastUpdated ? (
						<div className="mt-2 flex items-center text-sm text-gray-300">
							<CalendarIcon
								className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
								aria-hidden="true"
							/>
							{lastUpdated?.toLocaleDateString()}
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};
