/*
 * First file of API
 *
 */

// Dependencies
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";

import { router } from "./routes";
import { AppError } from "./shared/errors/AppError";
import swaggerConf from "./swagger.json";

// Create the app
const app = express();

// Use json
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConf));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);
// Start the server
app.listen(3333, () => console.log("Server is running"));
