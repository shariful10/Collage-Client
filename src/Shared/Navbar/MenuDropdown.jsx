import React, { useState } from "react";
import { useAuth } from "./../../Components/Hooks/useAuth";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { navItems } from "./navItems";
import { Link } from "react-router-dom";
import Name from "./Name";

const MenuDropdown = () => {
	const { user, logOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				{/* Droupdown Menu */}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="p-4 border-[1px] border-neutral-200 rounded-full flex flex-row items-center gap-3 cursor-pointer transition"
				>
					{isOpen ? (
						<HiOutlineX className="h-6 w-6" />
					) : (
						<AiOutlineMenu className="h-6 w-6" />
					)}
				</div>
			</div>
			{isOpen && (
				<div className="absolute rounded-xl shadow-md w-[250px] bg-white overflow-hidden right-0 md:top-12 text-sm py-2">
					<nav className="flex flex-col cursor-pointer">
						<ul>
							{user && (
								<li className="text-[18px] p-4 hover:bg-neutral-200">
									<Name />
								</li>
							)}
							{navItems.map(({ path, title }) => (
								<li className="text-[18px] p-4 hover:bg-neutral-200">
									<Link to={path}>{title}</Link>
								</li>
							))}
							{user ? (
								<li
									className="text-[18px] p-4 hover:bg-neutral-200"
									onClick={() => {
										logOut();
										setIsOpen(false);
									}}
								>
									Logout
								</li>
							) : (
								<>
									<li className="text-[18px] p-4 hover:bg-neutral-200">
										<Link onClick={() => setIsOpen(false)} to="/login">
											Login
										</Link>
									</li>
									<li className="text-[18px] p-4 hover:bg-neutral-200">
										<Link onClick={() => setIsOpen(false)} to="/signup">
											Sign Up
										</Link>
									</li>
								</>
							)}
						</ul>
					</nav>
				</div>
			)}
		</div>
	);
};

export default MenuDropdown;
