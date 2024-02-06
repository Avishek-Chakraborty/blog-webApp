import conf from "../config/config";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		//I am also storing the slug over here
		try {
			return await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					slug,
					content,
					featuredImage,
					status,
					userId,
				}
			);
		} catch (error) {
			console.error("Appwrite Config createPost error :: ", error);
			throw error;
		}
	}

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
				}
			);
		} catch (error) {
			console.error("Appwrite Config updatePost error :: ", error);
			throw error;
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.error("Appwrite Config deletePost error :: ", error);
			return false;
		}
	}

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
		} catch (error) {
			console.error("Appwrite Config getPost error :: ", error);
			return false;
		}
	}

	async getPosts() {
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				[Query.equal("status", "active")]
			);
		} catch (error) {
			console.error(
				"Appwrite Config getPosts (all posts fetch) error :: ",
				error
			);
			return false;
		}
	}

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				conf.appwriteBucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			console.error("There is a error in uploadFile auth :: ", error);
			return false;
		}
	}

	async deleteFile(fileId) {
		try {
			await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.error("There is a error in deleteFile auth :: ", error);
			return false;
		}
	}

	async getFilePreview(fileId) {
		try {
			return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
		} catch (error) {
			console.error("There is a error in getFilePreview auth :: ", error);
			throw error;
		}
	}

	async downloadFile(fileId) {
		try {
			return this.bucket.getFileDownload(
                conf.appwriteBucketId,
                fileId
            );
		} catch (error) {
			console.error("There is a error in downloadFile auth :: ", error);
			throw error;
		}
	}
}

const service = new Service();

export default service;
