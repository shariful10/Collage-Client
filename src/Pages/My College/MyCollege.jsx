import React from "react";
import Container from "../../Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionCover from "../../Components/SectionCover/SectionCover";

const MyCollege = () => {
	return (
		<Container>
			<section>
				<Helmet>
					<title>My College | Academia Collage</title>
				</Helmet>
				<SectionCover title="My College" />
			</section>
		</Container>
	);
};

export default MyCollege;
