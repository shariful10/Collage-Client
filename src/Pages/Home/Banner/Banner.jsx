import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Buttons from "./../../../Components/Button/Buttons";

const Banner = () => {
	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			<SwiperSlide>
				<div className="bg-banner2 bg-cover bg-no-repeat">
					<div className="bg-[#00000037] text-white py-[80px] md:py-[250px] md:pl-20 text-center lg:text-left px-4 ">
						<h1 className="text-4xl md:text-5xl">Admission Open</h1>
						<p className="lg:w-1/2 my-5 font-medium">
							Welcome to Academia Collage - your one-stop destination for college
							admissions! Discover your dream college from our vast database of
							renowned institutions worldwide. Find personalized support and valuable
							resources to navigate the admission process seamlessly. Your educational
							journey starts here!
						</p>
						{/* <button className="bg-blue-950 py-3 px-5 rounded-md">See More</button> */}
						<Buttons children="See More" />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-banner3 bg-cover bg-no-repeat">
					<div className="bg-[#00000037] text-white py-[80px] md:py-[250px] md:pl-20 text-center lg:text-left px-4 ">
						<h1 className="text-4xl md:text-5xl">Admission Open</h1>
						<p className="lg:w-1/2 my-5 font-medium">
							Welcome to Academia Collage - your one-stop destination for college
							admissions! Discover your dream college from our vast database of
							renowned institutions worldwide. Find personalized support and valuable
							resources to navigate the admission process seamlessly. Your educational
							journey starts here!
						</p>
						<Buttons children="See More" />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-banner1 bg-cover bg-no-repeat">
					<div className="bg-[#00000062] text-white py-[80px] md:py-[250px] md:pl-20 text-center lg:text-left px-4 ">
						<h1 className="text-4xl md:text-5xl">Admission Open</h1>
						<p className="lg:w-1/2 my-5 font-medium">
							Welcome to Academia Collage - your one-stop destination for college
							admissions! Discover your dream college from our vast database of
							renowned institutions worldwide. Find personalized support and valuable
							resources to navigate the admission process seamlessly. Your educational
							journey starts here!
						</p>
						<Buttons children="See More" />
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default Banner;
