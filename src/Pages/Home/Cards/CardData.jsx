import React from "react";
import Buttons from "../../../Components/Button/Buttons";
import { Link } from "react-router-dom";

const CardData = ({ card }) => {
	const { _id, college_image, college_name, admission_date, research_count, events, sports } =
		card;

	return (
		<div className="card w-full bg-base-100 shadow-xl rounded-lg">
			<figure>
				<img className="rounded-t-lg" src={college_image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					Collage Name: <span className="font-normal">{college_name}</span>
				</h2>
				<p className="font-semibold">
					Admision Date: <span className="font-normal">{admission_date}</span>
				</p>
				<p className="font-semibold">
					Research History: <span className="font-normal">{research_count}</span>
				</p>
				<p className="font-semibold">
					Events: <br />
					<span className="font-normal">
						1. {events[0].event_name}
						<br /> 2. {events[1].event_name}
					</span>
				</p>
				<p className="font-semibold">
					Sports: <br />
					<span className="font-normal">
						1. {sports[0].sport_name}
						<br /> 2. {sports[1].sport_name}
					</span>
				</p>
				<Link to={`/card-details/${_id}`}>
					<div className="card-actions justify-end">
						<Buttons children="Details" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default CardData;
