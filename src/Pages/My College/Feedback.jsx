import React, { useState } from "react";
import Container from "../../Shared/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { TbFidgetSpinner } from "react-icons/tb";
import { useAuth } from "../../Components/Hooks/useAuth";
import { FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Feedback = () => {
	const { user, loading, setLoading } = useAuth();
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	const handleFeedback = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = user.displayName;
		const image = user.photoURL;
		const msg = form.msg.value;
		const rating = form.rating.value;
		const reviewData = {
			name,
			image,
			msg,
			rating: parseFloat(rating),
		};
		console.log(reviewData);
		fetch(`${import.meta.env.VITE_URL}/feedback`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reviewData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					form.reset();
					toast.success("Successfully submitted");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				setLoading(false);
				toast.error("Something went wrong");
			});
	};

	return (
		<Container>
			<div className="my-[50px] md:my-[100px]">
				<SectionTitle heading="Share Your Feedback" />
				<div className="mb-10 w-[320px] md:w-[400px] py-[1px] bg-blue-950 mx-auto"></div>
				<form onSubmit={handleFeedback} className="mt-32">
					<div className="flex justify-center">
						{[...Array(5)].map((star, index) => {
							const currentRating = index + 1;
							return (
								<label key={index}>
									<input
										type="radio"
										name="rating"
										value={currentRating}
										className="hidden"
										onClick={() => setRating(currentRating)}
									/>
									<FaStar
										className="cursor-pointer"
										size={40}
										color={
											currentRating <= (hover || rating)
												? "#ffc107"
												: "#e4e5e9"
										}
										onMouseEnter={() => setHover(currentRating)}
										onMouseLeave={() => setHover(null)}
									/>
								</label>
							);
						})}
					</div>
					<textarea
						name="msg"
						id="msg"
						cols="30"
						rows="10"
						placeholder="Write your feedback here..."
						className="w-full p-4 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900 my-5"
					></textarea>
					<button type="submit" className="bg-blue-950 w-full rounded-md py-3 text-white">
						{loading ? (
							<TbFidgetSpinner className="m-auto animate-spin h-6 w-6" />
						) : (
							"Continue"
						)}
					</button>
				</form>
			</div>
		</Container>
	);
};

export default Feedback;
