import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "../useCase/CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      // Perform category creation
      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
      await createCategoryUseCase.execute({
        name,
        description,
      });

      // Response with category object
      return response.status(201).send();
    } catch (error) {
      // Response with error
      const msg = error
        .toString()
        .split(":")
        .map((_) => _.trim());

      return response.status(404).json({ Error: msg[1] });
    }
  }
}

export { CreateCategoryController };
