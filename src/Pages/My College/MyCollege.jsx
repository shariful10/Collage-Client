import React, { useEffect, useState } from "react";
import Container from "../../Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionCover from "../../Components/SectionCover/SectionCover";
import { useAuth } from "../../Components/Hooks/useAuth";
import Feedback from "./Feedback";

const MyCollege = () => {
	const { user } = useAuth();
	const [clgData, setClgData] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_URL}/selected/${user.email}`)
			.then((res) => res.json())
			.then((data) => setClgData(data));
	}, []);

	return (
		<Container>
			<section>
				<Helmet>
					<title>My College | Academia Collage</title>
				</Helmet>
				<SectionCover title="My College" />
				<div className="my-[50px] md:my-[100px]">
					{clgData.map(({ _id, image, name, email, address, phone, date }) => (
						<div
							key={_id}
							className="grid md:grid-cols-2 justify-center gap-6 md:gap-8 lg:gap-8 items-center rounded-xl my-[50px]"
						>
							<img className="rounded-lg h-[300px]" src={image} alt="image" />
							<div className="shadow-2xl rounded-lg p-10">
								<h4 className="text-xl font-semibold">
									Candidate Name:
									<span className="font-normal"> {name}</span>
								</h4>
								<p className="font-semibold text-[18px] mt-5">
									Candidate Email:
									<span className="font-normal text-[16px]"> {email}</span>
								</p>
								<p className="font-semibold text-[18px] mt-5">
									Address:
									<span className="font-normal text-[16px]"> {address}</span>
								</p>
								<p className="font-semibold text-[18px] mt-5">
									Phone Number:
									<span className="font-normal text-[16px]"> {phone}</span>
								</p>
								<p className="font-semibold text-[18px] mt-5">
									Date Of Birth:
									<span className="font-normal text-[16px]"> {date}</span>
								</p>
							</div>
						</div>
					))}
				</div>
				<Feedback />
			</section>
		</Container>
	);
};

export default MyCollege;
