import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<Toaster
					toastOptions={{
						success: {
							style: {
								background: "black",
							},
						},
						error: {
							style: {
								background: "black",
							},
						},
						style: {
							color: "white",
						},
					}}
				/>
				<RouterProvider router={router} />
			</HelmetProvider>
		</AuthProvider>
	</React.StrictMode>
);
