/*
 * Service to create category
 *
 */

// Dependencies
import { ICategoryRepository } from "../repositories/contracts/ICategoryRepository";

// DTO create category
interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // Dependency injection
  constructor(private categoryRepository: ICategoryRepository) {}

  // function to manipulate and create category
  async execute({ name, description }: IRequest): Promise<void | Error> {
    // Check all requeired field exists
    if (!name || !description) {
      throw new Error("Missing required field");
    }

    // Lookup the category by name
    const categoryAlredyExist = await this.categoryRepository.findByName(name);

    if (categoryAlredyExist) {
      // Return the existing category
      throw new Error("Category already exists");
    }

    // Create category
    await this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
