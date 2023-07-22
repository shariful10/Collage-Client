import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
	return (
		<div className="flex items-center">
			<Link to="/">
				<img className="w-full md:w-[70px] h-auto" src={logo} alt="Logo" />
			</Link>
			<h2 className="ml-2 text-xl md:text-3xl font-semibold">Collage Admission</h2>
		</div>
	);
};

export default Logo;
