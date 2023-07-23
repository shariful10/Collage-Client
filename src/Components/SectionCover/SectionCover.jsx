import React from "react";

const SectionCover = ({ title }) => {
	return (
		<div className="bg-coverImg my-10 rounded-lg bg-center">
			<div className="py-[50px] sm:py-[80px] md:py-[100px] lg:py-[150px] bg-[#0000005a] rounded-lg">
				<h1 className="text-5xl font-semibold text-center text-white">{title}</h1>
			</div>
		</div>
	);
};

export default SectionCover;
