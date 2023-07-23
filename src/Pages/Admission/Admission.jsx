import React from "react";
import { Helmet } from "react-helmet-async";
import SectionCover from "../../Components/SectionCover/SectionCover";
import Container from "../../Shared/Container/Container";

const Admission = () => {
	return (
		<Container>
			<section>
				<Helmet>
					<title>Admission | Academia Collage</title>
				</Helmet>
				<SectionCover title="Admission" />
			</section>
		</Container>
	);
};

export default Admission;
