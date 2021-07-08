/*
 * UseCase to list category
 *
 */

// Dependencies
import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/contracts/ICategoryRepository";

class ListCategoryUseCase {
  // Dependency injection
  constructor(private categoryRepository: ICategoryRepository) {}

  // function to manipulate and list category
  execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
