/*
 * Service to create user
 *
 */

// Dependencies
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../repositories/contracts/IUserRepository";

// DTO create User
interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  driver_license: string;
}

@injectable()
class CreateUserUseCase {
  // Dependency injection
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  // function to manipulate and create user
  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: IRequest): Promise<void | Error> {
    // Check all requeired field exists
    if (!name || !username || !email || !password) {
      throw new AppError("Missing required field", 400);
    }

    // Lookup the user by username
    const usernameAlredyExist = await this.userRepository.findByUsername(
      username
    );

    if (usernameAlredyExist) {
      // Return the existing user
      throw new AppError("User already exists", 400);
    }

    // Lookup the user by email
    const emailAlredyExist = await this.userRepository.findByEmail(email);

    if (emailAlredyExist) {
      // Return the existing user
      throw new AppError("User already exists", 400);
    }

    const pwdHash = await hash(password, 16);

    // Create user
    await this.userRepository.create({
      name,
      username,
      email,
      password: pwdHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
