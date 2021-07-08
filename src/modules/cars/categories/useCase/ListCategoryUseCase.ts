/*
 * UseCase to list category
 *
 */

// Dependencies
import { inject, injectable } from "tsyringe";

import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/contracts/ICategoryRepository";

@injectable()
class ListCategoryUseCase {
  // Dependency injection
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  // function to manipulate and list category
  execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
