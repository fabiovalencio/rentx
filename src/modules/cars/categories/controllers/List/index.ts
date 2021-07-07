import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryService } from "../../useCase/ListCategoryService";
import { ListCategoryController } from "./ListCategoryController";

const categorieRepository = CategoryRepository.getInstance();

const listCategoryService = new ListCategoryService(categorieRepository);

const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController, listCategoryService };
