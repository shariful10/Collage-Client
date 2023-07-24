import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
	return (
		<div>
			<Navbar />
			<div className="pt-[100px] md:pt-[111.688px] min-h-[calc(100vh-75px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
