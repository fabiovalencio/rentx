/*
 * Request Handler of category
 *
 */

// Dependencies
import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/categories/controllers/Create";
import { importCategoryController } from "../modules/cars/categories/controllers/Import";
import { listCategoryController } from "../modules/cars/categories/controllers/List";

// set the name of route
const categoriesRoutes = Router();

// instantiate Multer to create upload
const upload = multer({
  dest: "./tmp",
});

// categories - post
// Required data: name, description
// Optional data: none
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

// categories - get
// Required data: none
// Optional data: none
categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

// categories/import - post
// Required data: file
// Optional data: none
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

// Export the handlers
export { categoriesRoutes };
