import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionCover from "../../Components/SectionCover/SectionCover";
import Container from "../../Shared/Container/Container";
import Buttons from "../../Components/Button/Buttons";
import { Link } from "react-router-dom";

const Admission = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_URL}/collages`)
			.then((res) => res.json())
			.then((data) => setCards(data));
	}, []);

	return (
		<Container>
			<section>
				<Helmet>
					<title>Admission | Academia Collage</title>
				</Helmet>
				<SectionCover title="Admission" />
				<div className="my-[50px] md:my-[100px]">
					<table className="table overflow-x-hidden">
						<thead className="bg-blue-950 text-white rounded-t-lg">
							<tr>
								<th>No.</th>
								<th className="hidden md:block">Collage Image</th>
								<th>Collage Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cards.map(({ _id, college_image, college_name }, index) => (
								<tr key={_id}>
									<th>{index + 1}</th>
									<td className="hidden md:block">
										<img
											className="h-[50px] w-[50px] md:h-[100px] md:w-[150px] rounded-lg"
											src={college_image}
											alt="College Image"
										/>
									</td>
									<th>{college_name}</th>
									<td>
										<Link to={`/select-college/${_id}`}>
											<Buttons children="Select" />
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</Container>
	);
};

export default Admission;
