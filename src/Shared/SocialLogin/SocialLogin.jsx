import React from "react";
import { useAuth } from "./../../Components/Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
	const { loading, setLoading, signInWithGoogle, signInWithGithub } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then((res) => {
				console.log(res.user);
				toast.success("Successfully Login");
				// saveUser(res.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				toast.error(err.message);
			});
	};

	const handleGithubSignIn = () => {
		signInWithGithub()
			.then((res) => {
				console.log(res.user);
				toast.success("Successfully Login");
				// saveUser(res.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				toast.error(err.message);
			});
	};

	return (
		<>
			<div
				onClick={handleGoogleSignIn}
				className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 cursor-pointer rounded-md"
			>
				<FcGoogle size={32} />
				<p>Continue with Google</p>
			</div>
			<div
				onClick={handleGithubSignIn}
				className="flex justify-center items-center space-x-2 border mx-3 mb-3 p-2 border-gray-300 cursor-pointer rounded-md"
			>
				<FaGithub size={32} />
				<p>Continue with GitHub</p>
			</div>
		</>
	);
};

export default SocialLogin;
