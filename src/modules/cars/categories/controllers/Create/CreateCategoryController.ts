import { Request, Response } from "express";

import { CreateCategoryService } from "../../useCase/CreateCategoryService";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      // Perform category creation
      const category = this.createCategoryService.execute({
        name,
        description,
      });

      // Response with category object
      return response.status(201).json({ category });
    } catch (error) {
      // Response with error
      return response.status(404).json({ error });
    }
  }
}

export { CreateCategoryController };
