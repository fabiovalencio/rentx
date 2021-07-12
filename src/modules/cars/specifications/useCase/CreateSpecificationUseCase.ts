/*
 * Service to create specification
 *
 */

// Dependencies
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Specification } from "../entities/Specification";
import { ISpecificationRepository } from "../repositories/contracts/ISpecificationRepository";

// DTO create Specification
interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  // Dependency injection
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  // function to manipulate and create specification
  async execute({ name, description }: IRequest): Promise<void | Error> {
    // Check all requeired field exists
    if (!name || !description) {
      throw new AppError("Missing required field", 400);
    }

    // Lookup the specification by name
    const specificationAlredyExist =
      await this.specificationRepository.findByName(name);

    if (specificationAlredyExist) {
      // Return the existing specification
      throw new AppError("Specification already exists", 400);
    }

    // Create specification
    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
