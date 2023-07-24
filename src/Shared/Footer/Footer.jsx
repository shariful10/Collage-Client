import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

	return (
		<footer className="px-4 text-gray-800 flex flex-col">
			<div className="py-6 text-[18px] text-center text-blue-950 mt-auto font-medium">
				© {currentYear} Academia College Inc. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
