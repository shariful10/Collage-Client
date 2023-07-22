import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/AllSections.jsx/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
		],
	},
]);
