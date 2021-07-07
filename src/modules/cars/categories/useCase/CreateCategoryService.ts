/*
 * Service to create category
 *
 */

// Dependencies
import { Category } from "../models/Category";
import { ICategoryRepository } from "../repositories/contracts/ICategoryRepository";

// DTO create category
interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  // Dependency injection
  constructor(private categoryRepository: ICategoryRepository) {}

  // function to manipulate and create category
  execute({ name, description }: IRequest): Category {
    // Check all requeired field exists
    if (!name || !description) {
      throw new Error("Missing required field");
    }

    // Lookup the category by name
    const categoryAlredyExist = this.categoryRepository.findByName(name);

    if (categoryAlredyExist) {
      // Return the existing category
      return categoryAlredyExist;
    }

    // Create category
    return this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
