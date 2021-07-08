import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ImportCategoryUseCase } from "../../useCase/ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";

const categorieRepository = null;

const importCategoryUseCase = new ImportCategoryUseCase(categorieRepository);

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController, importCategoryUseCase };
