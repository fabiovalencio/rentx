import { Request, Response } from "express";

import { ListSpecificationService } from "../../useCase/ListSpecificationService";

class ListSpecificationController {
  constructor(private listSpecificationService: ListSpecificationService) {}

  handle(request: Request, response: Response): Response {
    // Get all specificationss
    const specifications = this.listSpecificationService.execute();

    // List specificationss
    return response.status(200).json({ specifications });
  }
}

export { ListSpecificationController };
