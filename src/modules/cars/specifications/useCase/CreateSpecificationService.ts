/*
 * Service to create specification
 *
 */

// Dependencies
import { Specification } from "../models/Specification";
import { ISpecificationRepository } from "../repositories/contracts/ISpecificationRepository";

// DTO create Specification
interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  // Dependency injection
  constructor(private specificationRepository: ISpecificationRepository) {}

  // function to manipulate and create specification
  execute({ name, description }: IRequest): Specification {
    // Check all requeired field exists
    if (!name || !description) {
      throw new Error("Missing required field");
    }

    // Lookup the specification by name
    const specificationAlredyExist =
      this.specificationRepository.findByName(name);

    if (specificationAlredyExist) {
      // Return the existing specification
      return specificationAlredyExist;
    }

    // Create specification
    return this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
