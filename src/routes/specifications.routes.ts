/*
 * Request Handler of specification
 *
 */

// Dependencies
import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/specifications/controllers/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/specifications/controllers/ListSpecificationController";

// Set the name of route
const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

// Categorie - post
// Required data: name, description
// Optional data: none
specificationsRoutes.post("/", createSpecificationController.handle);

// Categorie - get
// Required data: none
// Optional data: none
specificationsRoutes.get("/", listSpecificationController.handle);

// Export the handlers
export { specificationsRoutes };
