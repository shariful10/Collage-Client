import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Cards = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_URL}/collages`)
			.then((res) => res.json())
			.then((data) => setCards(data));
	}, []);

	return (
		<Container>
			<section className="my-[50px] md:my-[100px]">
				<SectionTitle heading="Our Collages" />
				<div className="mb-10 w-[200px] md:w-[250px] py-[1px] bg-blue-950 mx-auto">
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-12">
					{cards.slice(0, 3).map((card) => (
						<CardData key={card._id} card={card} />
					))}
				</div>
			</section>
		</Container>
	);
};

export default Cards;
