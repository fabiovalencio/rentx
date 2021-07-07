import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationService } from "../../useCase/CreateSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = SpecificationRepository.getInstance();

const createSpecificationService = new CreateSpecificationService(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export { createSpecificationController, createSpecificationService };
