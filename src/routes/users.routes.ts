/*
 * Request Handler of specification
 *
 */

// Dependencies
import { Router } from "express";

import { CreateUserController } from "../modules/users/controllers/CreateUserController";
import { ListUserController } from "../modules/users/controllers/ListUserController";

// Set the name of route
const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

// Categorie - post
// Required data: name, description
// Optional data: none
usersRoutes.post("/", createUserController.handle);

// Categorie - get
// Required data: none
// Optional data: none
usersRoutes.get("/", listUserController.handle);

// Export the handlers
export { usersRoutes };
