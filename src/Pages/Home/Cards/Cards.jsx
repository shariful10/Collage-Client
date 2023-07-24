import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Cards = () => {
	const [cards, setCards] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredCards, setFilteredCards] = useState(cards);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_URL}/collages`)
			.then((res) => res.json())
			.then((data) => setCards(data));
	}, []);

	const handleSearch = () => {
		const filtered = cards.filter((card) =>
			card.college_name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFilteredCards(filtered);
	};

	return (
		<Container>
			<section className="my-[50px] md:my-[100px]">
				<SectionTitle heading="Our Collages" />
				<div className="mb-10 w-[200px] md:w-[250px] py-[1px] bg-blue-950 mx-auto"></div>
				<div className="text-center mb-5 md:mb-10">
					<div className="form-control">
						<div className="input-group justify-end">
							<input
								type="text"
								name="text"
								placeholder="Search..."
								className="input input-bordered"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button type="button" onClick={handleSearch} className="btn-srch">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-12">
					{cards.slice(1, 4).map((card) => (
						<CardData key={card._id} card={card} />
					))}
				</div>
			</section>
		</Container>
	);
};

export default Cards;
