import React, { useRef } from "react";
import Container from "../../Shared/Container/Container";
import SectionCover from "../../Components/SectionCover/SectionCover";
import { useAuth } from "../../Components/Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const SelectCollege = () => {
	const collegeData = useLoaderData();
	const { user, loading, setLoading } = useAuth();
	const emailRef = useRef();
	console.log(collegeData);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const subject = form.subject.value;
		const phone = form.phone.value;
		const address = form.address.value;
		const date = form.date.value;
		const image = form.url.value;
		const college_name = form.college_name.value;
		const myColleges = { name, email, subject, phone, address, date, image, college_name };
		console.log(myColleges);
		fetch(`${import.meta.env.VITE_URL}/selected`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(myColleges),
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
			<section>
				<SectionCover title="Select College" />
				<div className="my-[50px] md:my-[100px]">
					<form
						onSubmit={handleSubmit}
						noValidate=""
						action=""
						className="space-y-6 ng-untouched ng-pristine ng-valid"
					>
						<div className="space-y-4">
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Candidate Name
									</label>
									<input
										type="name"
										name="name"
										id="name"
										defaultValue={user?.displayName}
										readOnly
										required
										placeholder="Enter Your Name Here"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900"
										data-temp-mail-org="0"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Candidate Email
									</label>
									<input
										ref={emailRef}
										type="email"
										name="email"
										id="email"
										required
										defaultValue={user?.email}
										readOnly
										placeholder="Enter Your Email Here"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900"
										data-temp-mail-org="0"
									/>
								</div>
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Subject
									</label>
									<input
										// ref={emailRef}
										type="text"
										name="subject"
										id="subject"
										required
										placeholder="Enter Your Subject Here"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900"
										data-temp-mail-org="0"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Phone Number
									</label>
									<input
										// ref={emailRef}
										type="text"
										name="phone"
										id="phone"
										required
										placeholder="Enter Your Phone Number"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900"
										data-temp-mail-org="0"
									/>
								</div>
							</div>
							<div className="grid md:grid-cols-3 gap-4">
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Address
									</label>
									<input
										type="text"
										name="address"
										id="address"
										required
										placeholder="Enter Your Address Here"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900"
										data-temp-mail-org="0"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Date Of Birth
									</label>
									<input
										type="date"
										name="date"
										id="date"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900"
									/>
								</div>
								<div>
									<label htmlFor="image" className="block mb-2 text-sm">
										Select Image
									</label>
									<input
										required
										type="url"
										id="url"
										name="url"
										placeholder="Enter Image URL Here"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900"
									/>
								</div>
							</div>
						</div>
						<div>
							<input
								required
								type="text"
								id="college_name"
								name="college_name"
								defaultValue={collegeData.college_name}
								placeholder="Enter Image URL Here"
								className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-950 bg-gray-200 text-gray-900 hidden"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="bg-blue-950 w-full rounded-md py-3 text-white"
							>
								{loading ? (
									<TbFidgetSpinner className="m-auto animate-spin h-6 w-6" />
								) : (
									"Submit"
								)}
							</button>
						</div>
					</form>
				</div>
			</section>
		</Container>
	);
};

export default SelectCollege;
