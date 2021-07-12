/*
 * Use Case create category
 *
 */

// Dependencies
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { ICategoryRepository } from "../repositories/contracts/ICategoryRepository";

// DTO create category
interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  // Dependency injection
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  // function to manipulate and create category
  async execute({ name, description }: IRequest): Promise<void | Error> {
    // Check all requeired field exists
    if (!name || !description) {
      throw new AppError("Missing required field", 400);
    }

    // Lookup the category by name
    const categoryAlredyExist = await this.categoryRepository.findByName(name);

    if (categoryAlredyExist) {
      // Return the existing category
      throw new AppError("Category already exists", 400);
    }

    // Create category
    await this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
