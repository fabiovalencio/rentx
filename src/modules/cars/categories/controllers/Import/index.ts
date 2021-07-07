import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ImportCategoryService } from "../../useCase/ImportCategoryService";
import { ImportCategoryController } from "./ImportCategoryController";

const categorieRepository = CategoryRepository.getInstance();

const importCategoryService = new ImportCategoryService(categorieRepository);

const importCategoryController = new ImportCategoryController(
  importCategoryService
);

export { importCategoryController, importCategoryService };
