import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "../useCase/CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;

    try {
      const createUserUseCase = container.resolve(CreateUserUseCase);
      await createUserUseCase.execute({
        name,
        username,
        email,
        password,
        driver_license,
      });

      return response.status(201).send();
    } catch (error) {
      // get the error
      const msg = error
        .toString()
        .split(":")
        .map((_) => _.trim());

      return response.status(501).json({ Error: msg[1] });
    }
  }
}

export { CreateUserController };
