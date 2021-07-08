import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryUseCase } from "../../useCase/ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categorieRepository = null;

const listCategoryUseCase = new ListCategoryUseCase(categorieRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController, listCategoryUseCase };
