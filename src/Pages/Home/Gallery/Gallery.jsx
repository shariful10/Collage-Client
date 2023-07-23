import React from "react";
import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Gallery = () => {
	return (
		<Container>
			<section>
				<SectionTitle heading="Gallery" />
				<div className="mb-10 w-[150px] md:w-[180px] py-[1px] bg-blue-950 mx-auto"></div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="grid gap-4">
						<div
							data-aos="zoom-in"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="1000"
						>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/c1y0vTR/banner-2.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/nCb5QNM/gallery-4.jpg"
								alt=""
							/>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="1000"
						>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/WW32bJZ/banner-1.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/M7ZdJ0d/gallery-7.jpg"
								alt=""
							/>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="1000"
						>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/9rsVwkm/5.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/Dg8jdcz/6.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div
							data-aos="zoom-in"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="1000"
						>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/ZJbbSSj/banner-3.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/X3dFD2k/3.jpg"
								alt=""
							/>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="1000"
						>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/qFGQbZ5/4.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/7jZJLY3/gallery-11.jpg"
								alt=""
							/>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="1000"
						>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/rbSt66S/1.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-full w-full rounded-lg border"
								src="https://i.ibb.co/tKPXKxB/2.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Gallery;
