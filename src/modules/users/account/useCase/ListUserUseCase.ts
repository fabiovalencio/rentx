/*
 * UseCase to list user
 *
 */

// Dependencies
import { inject, injectable } from "tsyringe";

import { User } from "../entities/User";
import { IUserRepository } from "../repositories/contracts/IUserRepository";

@injectable()
class ListUserUseCase {
  // Dependency injection
  constructor(
    @inject("UserRepository")
    private specificationRepository: IUserRepository
  ) {}

  // function to manipulate and list user
  async execute(): Promise<User[]> {
    const users = await this.specificationRepository.list();
    return users;
  }
}

export { ListUserUseCase };
