/*
 * Request Handler of specification
 *
 */

// Dependencies
import { Router } from "express";

import { createSpecificationController } from "../modules/cars/specifications/controllers/Create";
import { listSpecificationController } from "../modules/cars/specifications/controllers/List";

// Set the name of route
const specificationsRoutes = Router();

// Categorie - post
// Required data: name, description
// Optional data: none
specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

// Categorie - get
// Required data: none
// Optional data: none
specificationsRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

// Export the handlers
export { specificationsRoutes };
