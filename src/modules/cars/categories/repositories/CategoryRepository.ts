/*
 * Repository of category
 *
 */

// Dependencies
import { Category } from "../models/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "./contracts/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  // Create a private categories
  private categories: Category[];

  // Singleton
  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  // Create or retorne a category instance
  public static getInstance(): CategoryRepository {
    // Check if the instance exists
    if (!CategoryRepository.INSTANCE) {
      // Return a new instance
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    // Return a new instance
    return CategoryRepository.INSTANCE;
  }

  // Method to store category
  create({ name, description }: ICreateCategoryDTO): Category {
    // Create the categorie object
    const category = new Category();

    // Set the values to object category
    Object.assign(category, { name, description });

    // Store category
    this.categories.push(category);

    return category;
  }

  // Method to list all categories
  list(): Category[] {
    return this.categories;
  }

  // Method to get category by name
  findByName(name: string): Category {
    const category = this.categories.find(
      (category) => category.name.toLowerCase() === name.toLowerCase()
    );

    return category;
  }
}

export { CategoryRepository };
