import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationUseCase } from "../useCase/ListSpecificationUseCase";

class ListSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    // Get all specificationss
    const listSpecificationUseCase = container.resolve(
      ListSpecificationUseCase
    );
    const specifications = await listSpecificationUseCase.execute();

    // List specificationss
    return response.status(200).json({ specifications });
  }
}

export { ListSpecificationController };
