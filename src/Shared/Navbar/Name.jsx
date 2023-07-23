import React from "react";
import { useAuth } from "../../Components/Hooks/useAuth";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Name = () => {
	const { user } = useAuth();

	return (
		<>
			<h4
				id="title"
				className="text-[16px] xl:text-[18px] font-medium cursor-pointer"
			>
				{user?.displayName}
			</h4>
			<ReactTooltip
				anchorId="title"
				place="left"
				variant="info"
				content="View Prifile"
			/>
		</>
	);
};

export default Name;
