import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { ListSpecificationService } from "../../useCase/ListSpecificationService";
import { ListSpecificationController } from "./ListSpecificationController";

const specificationsRepository = SpecificationRepository.getInstance();

const listSpecificationService = new ListSpecificationService(
  specificationsRepository
);

const listSpecificationController = new ListSpecificationController(
  listSpecificationService
);

export { listSpecificationController, listSpecificationService };
