import React from "react";
import Lottie from "lottie-react";
import face from '../../assets/animation.json'

const Face = () => {
	return (
		<div className="w-full flex justify-center items-center relative">
			<Lottie className="w-40 h-40" animationData={face} loop={true} />
		</div>
	);
};

export default Face;
