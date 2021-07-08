import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "../useCase/ListCategoryUseCase";

class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);
    const categories = await listCategoryUseCase.execute();

    // List categories
    return response.status(200).json({ categories });
  }
}

export { ListCategoryController };
