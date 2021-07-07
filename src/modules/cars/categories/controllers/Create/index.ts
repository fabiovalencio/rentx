import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryService } from "../../useCase/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categorieRepository = CategoryRepository.getInstance();

const createCategoryService = new CreateCategoryService(categorieRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController, createCategoryService };