import { container } from "tsyringe";

import { CategoryRepository } from "../../modules/cars/categories/repositories/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/categories/repositories/contracts/ICategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/specifications/repositories/contracts/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/specifications/repositories/SpecificationRepository";
import { IUserRepository } from "../../modules/users/account/repositories/contracts/IUserRepository";
import { IUserTokensRepository } from "../../modules/users/account/repositories/contracts/IUserTokensRepository";
import { UserRepository } from "../../modules/users/account/repositories/UserRepository";
import { UserTokensRepository } from "../../modules/users/account/repositories/UserTokensRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokensRepository
);
