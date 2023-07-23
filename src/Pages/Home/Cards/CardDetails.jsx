import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SectionCover from "../../../Components/SectionCover/SectionCover";
import Container from "../../../Shared/Container/Container";

const CardDetails = () => {
	const singleCardData = useLoaderData();
	console.log(singleCardData);
	const {
		_id,
		college_image,
		college_name,
		admission_date,
		research_count,
		events,
		sports,
		event_description,
		admission_process,
		research_works,
	} = singleCardData;

	return (
		<Container>
			<Helmet>
				<title>Collage Details | Academia Collage</title>
			</Helmet>
			<SectionCover title="Cart Details" />
			<div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center rounded-xl shadow-2xl my-[50px] md:my-[100px]">
				<img className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg min-h-full" src={college_image} alt="Movie" />
				<div className="pr-5 md:pr-8 lg:pr-10 px-5 py-5">
					<h4 className="text-2xl font-semibold">
						Collage Name: <span className="font-normal">{college_name}</span>
					</h4>
					<p className="font-semibold text-[18px] mt-5">
						Events Details:{" "}
						<span className="font-normal text-[16px]">{event_description}</span>
					</p>
					<p className="font-semibold text-[18px] mt-2">
						Admission Process: <br />
						<li className="font-normal list-disc text-[16px]">
							<span className="font-semibold">Eligibility Criteria: </span>
							{admission_process[0].eligibility_criteria}
						</li>
						<li className="font-normal list-disc text-[16px]">
							<span className="font-semibold">Application Process: </span>
							{admission_process[1].application_process}
						</li>
						<li className="font-normal list-disc text-[16px]">
							<span className="font-semibold">Selection Process: </span>
							{admission_process[2].selection_process}
						</li>
					</p>
					<p className="font-semibold text-[18px] mt-2">
						Research Works: <br />
						<li className="font-normal list-disc text-[16px]">
							{research_works[0].title}.
						</li>
						<li className="font-normal list-disc text-[16px]">
							{research_works[1].title}.
						</li>
					</p>
					<p className="font-semibold text-[18px] mt-2">
						Sports Categories: <br />
						<li className="font-normal list-disc text-[16px]">
							{sports[0].sport_name}
						</li>
						<li className="font-normal list-disc text-[16px]">
							{sports[1].sport_name}
						</li>
					</p>
				</div>
			</div>
		</Container>
	);
};

export default CardDetails;
