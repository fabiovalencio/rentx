/*
 * Repository of user
 *
 */

// Dependencies

import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUserRepository } from "./contracts/IUserRepository";

class UserRepository implements IUserRepository {
  // Create a private user
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  // Method to store user
  async create({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });

    // Store user
    await this.repository.save(user);
  }

  // Method to list all users
  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  // Method to get user by name
  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }

  // Method to get user by username
  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }

  // Method to get user by username
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  // Method to get user by id
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UserRepository };
