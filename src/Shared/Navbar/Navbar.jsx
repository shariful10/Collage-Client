import React from "react";
import MenuDropdown from "./MenuDropdown";
import Logo from "./Logo";
import Container from "../Container/Container";
import { navItems } from "./navItems";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Components/Hooks/useAuth";
import Name from "./Name";

const Navbar = () => {
	const { user, logOut } = useAuth();

	return (
		<div className="fixed w-full bg-white z-10 shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex flex-row justify-between items-center gap-3 md:gap-0">
						<Logo />
						<nav>
							<ul className="hidden lg:flex">
								{navItems.map(({ path, title }) => (
									<li key={title} className="mx-4 text-[18px] font-medium">
										<NavLink
											to={path}
											className={({ isActive }) =>
												isActive ? "active" : "default"
											}
										>
											{title}
										</NavLink>
									</li>
								))}
								<li className="mx-4 text-[18px] font-medium">
									<NavLink
										onClick={() => setIsOpen(false)}
										className={({ isActive }) =>
											isActive ? "active" : "default"
										}
										to="/signup"
									>
										Sign Up
									</NavLink>
								</li>
								{user ? (
									<li
										onClick={() => {
											logOut();
											setIsOpen(false);
										}}
										className={({ isActive }) =>
											isActive
												? "active mx-4 text-[18px] font-medium"
												: "default mx-4 text-[18px] font-medium"
										}
									>
										Logout
									</li>
								) : (
									<>
										<li className="mx-4 text-[18px] font-medium">
											<NavLink
												onClick={() => setIsOpen(false)}
												className={({ isActive }) =>
													isActive ? "active" : "default"
												}
												to="/login"
											>
												Login
											</NavLink>
										</li>
									</>
								)}
							</ul>
						</nav>
						<div className="lg:hidden">
							<MenuDropdown />
						</div>
						{user && <Name />}
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Navbar;
