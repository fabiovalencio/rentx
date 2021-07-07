/*
 * Service to list especification
 *
 */

// Dependencies
import { Specification } from "../models/Specification";
import { ISpecificationRepository } from "../repositories/contracts/ISpecificationRepository";

class ListSpecificationService {
  // Dependency injection
  constructor(private specificationRepository: ISpecificationRepository) {}

  // function to manipulate and list especification
  execute(): Specification[] {
    const especifications = this.specificationRepository.list();

    return especifications;
  }
}

export { ListSpecificationService };
