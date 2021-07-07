import { Request, Response } from "express";

import { CreateSpecificationService } from "../../useCase/CreateSpecificationService";

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      // Perform especification creation
      const especification = this.createSpecificationService.execute({
        name,
        description,
      });

      // Response with especification object
      return response.status(201).json({ especification });
    } catch (error) {
      // Response with error
      return response.status(404).json({ error });
    }
  }
}

export { CreateSpecificationController };
