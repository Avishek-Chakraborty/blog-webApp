import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth"; // Check authService import 
import { logout } from "../../store/authSlice";

function LogoutBtn() {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		authService
			.logout()
			.then(() => {
				dispatch(logout());
			})
			.catch();
		//TODO: Make catch for failure
	};

	return (
		<button
			className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
			onClick={logoutHandler}
		>
			LogOut
		</button>
	);
}

export default LogoutBtn;
