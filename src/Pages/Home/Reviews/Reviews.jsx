import React from "react";
import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Reviews = () => {
	return (
		<Container>
			<section className="my-[50px] md:my-[100px]">
				<SectionTitle heading="Students Feedback" />
				<div className="mb-10 w-[280px] md:w-[350px] py-[1px] bg-blue-950 mx-auto"></div>
			</section>
		</Container>
	);
};

export default Reviews;
