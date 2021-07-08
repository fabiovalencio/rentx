import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "../useCase/CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      // Perform especification creation
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );
      await createSpecificationUseCase.execute({
        name,
        description,
      });

      // Response with especification object
      return response.status(201).send();
    } catch (error) {
      // Response with error
      const msg = error
        .toString()
        .split(":")
        .map((_) => _.trim());

      return response.status(501).json({ Error: msg[1] });
    }
  }
}

export { CreateSpecificationController };
