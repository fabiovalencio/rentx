import { container } from "tsyringe";

import { CategoryRepository } from "../../modules/cars/categories/repositories/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/categories/repositories/contracts/ICategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/specifications/repositories/contracts/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/specifications/repositories/SpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
