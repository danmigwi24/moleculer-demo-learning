"use strict";

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "auth",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		login: {
			rest: {
				method: "POST",
				path: "/login",
				// Specify that the action expects JSON input in the request body
				parse: "json",
			},
			async handler(ctx) {
				 // Retrieve username and password from the request body
				 const { username, password } = ctx.params;

				 // You can perform authentication logic here, e.g., query the database or check credentials
			 
				 // For demonstration purposes, let's assume a simple hardcoded check
				 const validUsername = "exampleuser";
				 const validPassword = "secretpassword";
			 
				 if (username === validUsername && password === validPassword) {
				   return { success: true, message: "Login successful" };
				 } else {
				   return { success: false, message: "Invalid username or password" };
				 }
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
