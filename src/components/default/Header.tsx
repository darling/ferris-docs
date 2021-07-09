/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import {
	AcademicCapIcon,
	InformationCircleIcon,
	MenuIcon,
	XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';
import React, { Fragment } from 'react';

const mainPages = [
	{
		name: 'Get Started',
		description:
			'Learn how to set up Ferris and protect your server today.',
		href: '/getting-started',
		icon: InformationCircleIcon,
	},
	{
		name: 'Commands',
		description: 'See all the commands Ferris has to offer.',
		href: '/commands',
		icon: AcademicCapIcon,
	},
];

const resources = [
	{
		name: 'Troubleshooting',
		description:
			'Get all of your questions answered in our forums or contact support.',
		href: '/troubleshooting',
	},
	{
		name: 'Warnings',
		description:
			'Learn how to maximize our warnings system to get the most out of it.',
		href: '#',
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

export const Header = () => {
	return (
		<Popover className="relative bg-gray-900">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1 -ml-2">
							<Link to="/">
								<span className="sr-only">Workflow</span>
								<img
									height={30}
									width={100}
									src="/img/logo.png"
									alt="Logo"
									className="cursor-pointer inline-flex items-center mr-8 transition-colors duration-200 rounded-sm hover:bg-gray-800 p-3"
								/>
							</Link>
						</div>
						<div className="-mr-2 -my-2 md:hidden">
							<Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
								<span className="sr-only">Open menu</span>
								<MenuIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</Popover.Button>
						</div>
						<Popover.Group
							as="nav"
							className="hidden md:flex space-x-10"
						>
							<Popover className="relative">
								{({ open }) => (
									<>
										<Popover.Button
											className={classNames(
												open
													? 'text-gray-200'
													: 'text-gray-400',
												'group bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
											)}
										>
											<span>Guides</span>
											<ChevronDownIcon
												className={classNames(
													open
														? 'text-gray-200'
														: 'text-gray-400',
													'ml-2 h-5 w-5 group-hover:text-gray-200'
												)}
												aria-hidden="true"
											/>
										</Popover.Button>

										<Transition
											show={open}
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0 translate-y-1"
											enterTo="opacity-100 translate-y-0"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100 translate-y-0"
											leaveTo="opacity-0 translate-y-1"
										>
											<Popover.Panel
												static
												className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
											>
												<div className="rounded-lg shadow-lg ring-1 ring-green-500 ring-opacity-5 overflow-hidden">
													<div className="relative grid gap-6 bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
														{mainPages.map(
															(item) => (
																<Link
																	key={
																		item.name
																	}
																	to={
																		item.href
																	}
																	className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800"
																>
																	<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
																		<item.icon
																			className="h-6 w-6"
																			aria-hidden="true"
																		/>
																	</div>
																	<div className="ml-4">
																		<p className="text-base font-medium text-gray-200">
																			{
																				item.name
																			}
																		</p>
																		<p className="mt-1 text-sm text-gray-500">
																			{
																				item.description
																			}
																		</p>
																	</div>
																</Link>
															)
														)}
													</div>
													<div className="p-5 bg-gray-800 sm:p-8">
														<Link
															className="-m-3 p-3 flow-root rounded-md hover:bg-gray-700"
															to="https://ferris.gg/pricing"
														>
															<div className="flex items-center">
																<div className="text-base font-medium text-gray-200">
																	Donate
																</div>
																<span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-green-100 text-green-800">
																	Awesome!
																</span>
															</div>
															<p className="mt-1 text-sm text-gray-400">
																Empower your
																entire server
																with even more
																advanced tools.
															</p>
														</Link>
													</div>
												</div>
											</Popover.Panel>
										</Transition>
									</>
								)}
							</Popover>

							{/* <Link to="/">
								<a className="text-base font-medium text-gray-400 hover:text-gray-200">
									Ferris.gg
								</a>
							</Link> */}
							<a
								href="https://ferris.gg/discord"
								className="text-base font-medium text-gray-400 hover:text-gray-200"
							>
								Discord Server
							</a>

							<Popover className="relative">
								{({ open }) => (
									<>
										<Popover.Button
											className={classNames(
												open
													? 'text-gray-200'
													: 'text-gray-400',
												'group bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
											)}
										>
											<span>More</span>
											<ChevronDownIcon
												className={classNames(
													open
														? 'text-gray-200'
														: 'text-gray-400',
													'ml-2 h-5 w-5 group-hover:text-gray-200'
												)}
												aria-hidden="true"
											/>
										</Popover.Button>

										<Transition
											show={open}
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0 translate-y-1"
											enterTo="opacity-100 translate-y-0"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100 translate-y-0"
											leaveTo="opacity-0 translate-y-1"
										>
											<Popover.Panel
												static
												className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
											>
												<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
													<div className="relative grid gap-6 bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
														{resources.map(
															(item) => (
																<Link
																	key={
																		item.name
																	}
																	to={
																		item.href
																	}
																	className="-m-3 p-3 block rounded-md hover:bg-gray-800"
																>
																	<p className="text-base font-medium text-gray-200">
																		{
																			item.name
																		}
																	</p>
																	<p className="mt-1 text-sm text-gray-400">
																		{
																			item.description
																		}
																	</p>
																</Link>
															)
														)}
													</div>
												</div>
											</Popover.Panel>
										</Transition>
									</>
								)}
							</Popover>
						</Popover.Group>
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900 divide-y-2 divide-gray-700">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-between">
										<div>
											<img
												height={30}
												width={100}
												src="/img/logo.png"
												alt="Logo"
												className="cursor-pointer inline-flex items-center mr-8 transition-colors duration-200 rounded-sm hover:bg-gray-800 p-3"
											/>
										</div>
										<div className="-mr-2">
											<Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
												<span className="sr-only">
													Close menu
												</span>
												<XIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</Popover.Button>
										</div>
									</div>
									<div className="mt-6">
										<nav className="grid grid-cols-1 gap-7">
											{mainPages.map((item) => (
												<Link
													key={item.name}
													to={item.href}
													className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-800"
												>
													<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white">
														<item.icon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</div>
													<div className="ml-4 text-base font-medium text-gray-200">
														{item.name}
													</div>
												</Link>
											))}
										</nav>
									</div>
								</div>
								<div className="py-6 px-5">
									<div className="grid grid-cols-2 gap-4">
										{resources.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className="text-base font-medium text-gray-200 hover:text-gray-700"
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};
