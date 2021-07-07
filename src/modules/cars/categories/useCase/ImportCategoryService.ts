/*
 * Service to import csv
 *
 */

// Dependencies
import csvParse from "csv-parse";
import fs from "fs";

import { ICategoryRepository } from "../repositories/contracts/ICategoryRepository";

interface IImportCategory {
  id: number;
  name: string;
  description: string;
}

interface IRequest {
  name: string;
  description: string;
}

class ImportCategoryService {
  // Dependency injection
  constructor(private categoryRepository: ICategoryRepository) {}

  // function to read categories from file
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      // reads sequentially from the current file position
      const stream = fs.createReadStream(file.path);
      // parser converting CSV text input into array
      const parsedFile = csvParse({ delimiter: ";" });
      // takes a readable stream and connects to a writable stream
      stream.pipe(parsedFile);
      // read line by line
      parsedFile
        .on("data", async (line) => {
          const [idS, name, description] = line;
          const id = +idS;
          categories.push({ id, name, description });
        })
        .on("end", () => {
          // remove file from tmp folder
          fs.promises.unlink(file.path);
          // return object Category
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  // function to manipulate imported file
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description }: IRequest = category;
      // Lookup the category by name
      const categoryAlredyExist = this.categoryRepository.findByName(name);

      if (!categoryAlredyExist) {
        // Create category
        this.categoryRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryService };
