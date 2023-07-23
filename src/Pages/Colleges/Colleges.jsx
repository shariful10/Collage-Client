import React, { useEffect, useState } from "react";
import Container from "../../Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import SectionCover from "../../Components/SectionCover/SectionCover";
import CardData from "../Home/Cards/CardData";

const Colleges = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_URL}/collages`)
			.then((res) => res.json())
			.then((data) => setCards(data));
	}, []);

	return (
		<Container>
			<Helmet>
				<title>Colleges | Academia Collage</title>
			</Helmet>
			<SectionCover title="Colleges" />
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-12">
				{cards.map((card) => (
					<CardData key={card._id} card={card} />
				))}
			</div>
		</Container>
	);
};

export default Colleges;
