import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.account = new Account(this.client);
	}

	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				// Call another method
				return this.login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			console.error("Myyyyy!!! Error in auth account creation :: ", error);
			throw error;
		}
	}

	async login({ email, password }) {
		try {
			return await this.account.createEmailSession(email, password);
		} catch (error) {
			console.error("Myyyy!!! login auth error : ", error);
			throw error;
		}
	}

	async getCurrentUser() {
		return this.account
			.get()
			.then((user) => {
				return user;
			})
			.catch((error) => {
				console.log(
					"Myyy!! Appwrite service :: getCurrentUser :: error",
					error
				);
				return null;
			});
	}

	// getCurrentUser() {
	// 	return this.account.get()
	// 		.then(user => {
	// 			return user;
	// 		})
	// 		.catch(error => {
	// 			console.log("Appwrite service :: getCurrentUser :: error", error);
	// 			return null;
	// 		});
	// }
	

	async logout() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			console.error("Myyyy! LogOut auth error :: ", error);
			throw error;
		}
	}
}

const authService = new AuthService();

export default authService;
