/*
 * Request Handler of category
 *
 */

// Dependencies
import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/categories/controllers/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/categories/controllers/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/categories/controllers/ListCategoryController";

// set the name of route
const categoriesRoutes = Router();

// instantiate Multer to create upload
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoryController = new ImportCategoryController();

// categories - post
// Required data: name, description
// Optional data: none
categoriesRoutes.post("/", createCategoryController.handle);

// categories - get
// Required data: none
// Optional data: none
categoriesRoutes.get("/", listCategoryController.handle);

// categories/import - post
// Required data: file
// Optional data: none
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

// Export the handlers
export { categoriesRoutes };
