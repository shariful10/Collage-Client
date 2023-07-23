import React from "react";

const SectionTitle = ({ heading }) => {
	return (
		<div>
			<h1 className="text-3xl md:text-4xl text-center font-semibold mb-4">{heading}</h1>
		</div>
	);
};

export default SectionTitle;
