/*
 * Service to list category
 *
 */

// Dependencies
import { Category } from "../models/Category";
import { ICategoryRepository } from "../repositories/contracts/ICategoryRepository";

class ListCategoryService {
  // Dependency injection
  constructor(private categoryRepository: ICategoryRepository) {}

  // function to manipulate and list category
  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryService };
