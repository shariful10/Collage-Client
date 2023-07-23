import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/collage.png";

const Logo = () => {
	return (
		<Link to="/" className="flex items-center">
			<img className="w-[60px] md:w-[70px] h-auto" src={logo} alt="Logo" />
			<h2 className="ml-2 text-xl xl:text-3xl font-semibold hidden lg:block">
				Academia Collage
			</h2>
		</Link>
	);
};

export default Logo;
