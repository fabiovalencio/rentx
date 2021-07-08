/*
 * Repository of category
 *
 */

// Dependencies
import { getRepository, Repository } from "typeorm";

import { Category } from "../entities/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "./contracts/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  // Create a private repository category
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  // Create or retorne a category instance
  // public static getInstance(): CategoryRepository {
  //   // Check if the instance exists
  //   if (!CategoryRepository.INSTANCE) {
  //     // Return a new instance
  //     CategoryRepository.INSTANCE = new CategoryRepository();
  //   }

  //   // Return a new instance
  //   return CategoryRepository.INSTANCE;
  // }

  // Method to store category
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // Create the categorie object
    const category = this.repository.create({
      name,
      description,
    });

    // Store category
    await this.repository.save(category);
  }

  // Method to list all categories
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  // Method to get category by name
  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository };
