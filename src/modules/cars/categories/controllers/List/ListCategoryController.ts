import { Request, Response } from "express";

import { ListCategoryService } from "../../useCase/ListCategoryService";

class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) {}

  handle(request: Request, response: Response): Response {
    // Get all categories
    const categories = this.listCategoryService.execute();

    // List categories
    return response.status(200).json({ categories });
  }
}

export { ListCategoryController };
