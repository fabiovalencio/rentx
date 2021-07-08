import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryUseCase } from "../../useCase/CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

export default (): CreateCategoryController => {
  const categorieRepository = new CategoryRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categorieRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
};
