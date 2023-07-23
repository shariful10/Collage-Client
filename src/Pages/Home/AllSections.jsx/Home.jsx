import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import Cards from "../Cards/Cards";
import Gallery from "../Gallery/Gallery";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home | Academia Collage</title>
			</Helmet>
			<Banner />
			<Cards />
			<Gallery />
		</>
	);
};

export default Home;
