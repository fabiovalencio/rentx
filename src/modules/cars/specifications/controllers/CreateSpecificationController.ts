import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "../useCase/CreateSpecificationUseCase";

class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      // Perform especification creation
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );
      const especification = createSpecificationUseCase.execute({
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
