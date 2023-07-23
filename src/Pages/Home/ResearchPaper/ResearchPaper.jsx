import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Container from "../../../Shared/Container/Container";
import { Link } from "react-router-dom";

const ResearchPaper = () => {
	return (
		<Container>
			<section className="my-[50px] md:my-[100px]">
				<SectionTitle heading="Research Papers" />
				<div className="mb-10 w-[250px] md:w-[300px] py-[1px] bg-blue-950 mx-auto"></div>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							Google Scholar:{" "}
							<Link
								className="font-normal text-blue-600"
								to="https://scholar.google.com"
							>
								https://scholar.google.com
							</Link>
						</p>
					</div>
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							IEEE Xplore Digital Library:{" "}
							<Link
								className="font-normal text-blue-600"
								to="https://ieeexplore.ieee.org/Xplore/home.jsp"
							>
								https://ieeexplore.ieee.org/Xplore/home.jsp
							</Link>
						</p>
					</div>
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							ACM Digital Library:{" "}
							<Link className="font-normal text-blue-600" to="https://dl.acm.org">
								https://dl.acm.org
							</Link>
						</p>
					</div>
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							PubMed:{" "}
							<Link
								className="font-normal text-blue-600"
								to="https://pubmed.ncbi.nlm.nih.gov"
							>
								https://pubmed.ncbi.nlm.nih.gov
							</Link>
						</p>
					</div>
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							JSTOR:{" "}
							<Link className="font-normal text-blue-600" to="https://www.jstor.org">
								https://www.jstor.org
							</Link>
						</p>
					</div>
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							ScienceDirect:{" "}
							<Link
								className="font-normal text-blue-600"
								to="https://www.sciencedirect.com"
							>
								https://www.sciencedirect.com
							</Link>
						</p>
					</div>
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							ResearchGate:{" "}
							<Link
								className="font-normal text-blue-600"
								to="https://www.researchgate.net"
							>
								https://www.researchgate.net
							</Link>
						</p>
					</div>
					<div className="flex">
						<img className="h-6 w-6" src="https://i.ibb.co/j8chQCQ/check.png" alt="" />
						<p className="ml-2 font-semibold">
							Scopus:{" "}
							<Link
								className="font-normal text-blue-600"
								to="https://www.scopus.com"
							>
								https://www.scopus.com
							</Link>
						</p>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default ResearchPaper;
