/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css'
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Header, Footer} from './components'
// import { Outlet } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login({ userData }));
				} else {
					dispatch(logout());
				}
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="min-h-sc flex flex-wrap content-between bg-green-400">
			<div className="w-full block">
				<Header />
				<main>
					TODO
					{/* <Outlet/> */}
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
