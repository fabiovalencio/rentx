/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../config/auth";
import { UserRepository } from "../modules/users/account/repositories/UserRepository";
import { AppError } from "../shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exist", 400);
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
