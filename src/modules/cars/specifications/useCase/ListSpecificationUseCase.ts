/*
 * UseCase to list especification
 *
 */

// Dependencies
import { inject, injectable } from "tsyringe";

import { Specification } from "../models/Specification";
import { ISpecificationRepository } from "../repositories/contracts/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
  // Dependency injection
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  // function to manipulate and list especification
  execute(): Specification[] {
    const especifications = this.specificationRepository.list();

    return especifications;
  }
}

export { ListSpecificationUseCase };
