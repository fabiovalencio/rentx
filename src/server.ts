/*
 * First file of API
 *
 */

// Dependencies
import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerConf from "./swagger.json";

// Create the app
const app = express();

// Use json
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConf));
app.use(router);

// Start the server
app.listen(3333, () => console.log("Server is running"));
