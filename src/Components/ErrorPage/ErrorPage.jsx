import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Face from "./Face";
// import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
	const { error, status } = useRouteError();

	return (
		<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<Face />
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-blue-400">
						<span className="sr-only">Error</span>
						{status || 404}
					</h2>
					<p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
						{error?.message}
					</p>
					<Link
						to="/"
						className="bg-blue-400 px-5 py-4 rounded-md text-white font-semibold"
					>
						Back to Home
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
