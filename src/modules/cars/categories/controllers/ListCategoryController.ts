import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "../useCase/ListCategoryUseCase";

class ListCategoryController {
  handle(request: Request, response: Response): Response {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);
    const categories = listCategoryUseCase.execute();

    // List categories
    return response.status(200).json({ categories });
  }
}

export { ListCategoryController };
