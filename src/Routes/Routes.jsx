import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/AllSections.jsx/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CardDetails from "../Pages/Home/Cards/CardDetails";
import Colleges from "../Pages/Colleges/Colleges";

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
				path: "/card-details/:id",
				element: <CardDetails />,
				loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/collage/${params.id}`),
			},
			{
				path: "/colleges",
				element: <Colleges />,
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
