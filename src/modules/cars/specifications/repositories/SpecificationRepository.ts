/*
 * Repository of specification
 *
 */

// Dependencies
import { getRepository, Repository } from "typeorm";

import { Specification } from "../entities/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./contracts/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  // Create a private specificationss
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  // Method to store specification
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    // Create the specifications object
    const specification = this.repository.create({
      name,
      description,
    });

    // Store specification
    await this.repository.save(specification);
  }

  // Method to list all specifications
  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  // Method to get specification by name
  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }
}

export { SpecificationRepository };
