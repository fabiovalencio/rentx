import { container } from "tsyringe";

import { CategoryRepository } from "../../modules/cars/categories/repositories/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/categories/repositories/contracts/ICategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/specifications/repositories/contracts/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/specifications/repositories/SpecificationRepository";
import { IUserRepository } from "../../modules/users/repositories/contracts/IUserRepository";
import { UserRepository } from "../../modules/users/repositories/UserRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
