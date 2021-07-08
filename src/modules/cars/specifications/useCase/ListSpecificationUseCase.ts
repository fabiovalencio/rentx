/*
 * UseCase to list especification
 *
 */

// Dependencies
import { inject, injectable } from "tsyringe";

import { Specification } from "../entities/Specification";
import { ISpecificationRepository } from "../repositories/contracts/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
  // Dependency injection
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  // function to manipulate and list especification
  async execute(): Promise<Specification[]> {
    const especifications = await this.specificationRepository.list();
    return especifications;
  }
}

export { ListSpecificationUseCase };
