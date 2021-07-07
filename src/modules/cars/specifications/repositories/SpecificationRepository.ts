/*
 * Repository of specification
 *
 */

// Dependencies
import { Specification } from "../models/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./contracts/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  // Create a private specificationss
  private specifications: Specification[];

  // Singleton
  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  // Create or retorne a specification instance
  public static getInstance(): SpecificationRepository {
    // Check if the instance exists
    if (!SpecificationRepository.INSTANCE) {
      // Return a new instance
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    // Return a new instance
    return SpecificationRepository.INSTANCE;
  }

  // Method to store specification
  create({ name, description }: ICreateSpecificationDTO): Specification {
    // Create the specifications object
    const specification = new Specification();

    // Set the values to object specification
    Object.assign(specification, { name, description });

    // Store specification
    this.specifications.push(specification);

    return specification;
  }

  // Method to list all specifications
  list(): Specification[] {
    return this.specifications;
  }

  // Method to get specification by name
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name.toLowerCase() === name.toLowerCase()
    );

    return specification;
  }
}

export { SpecificationRepository };
