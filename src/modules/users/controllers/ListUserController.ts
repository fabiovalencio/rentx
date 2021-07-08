import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserUseCase } from "../useCase/ListUserUseCase";

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    // Get all specificationss
    const listUserUseCase = container.resolve(ListUserUseCase);
    const specifications = await listUserUseCase.execute();

    // List specificationss
    return response.status(200).json({ specifications });
  }
}

export { ListUserController };
