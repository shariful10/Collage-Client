import React from "react";
import { useAuth } from "../../Components/Hooks/useAuth";

const Name = () => {
	const { user } = useAuth();

	return (
		<div>
			<h4 title="View Prifile" className="text-[16px] xl:text-[18px] font-medium cursor-pointer">{user?.displayName}</h4>
		</div>
	);
};

export default Name;
