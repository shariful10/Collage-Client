import React from "react";
import { useAuth } from "../../Components/Hooks/useAuth";

const Name = () => {
	const { user } = useAuth();

	return (
		<div>
			<h4 className="text-[18px] font-medium cursor-pointer">{user?.displayName}</h4>
		</div>
	);
};

export default Name;
