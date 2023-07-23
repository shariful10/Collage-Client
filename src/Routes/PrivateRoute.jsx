import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Components/Hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <Loader />;
	}

	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
