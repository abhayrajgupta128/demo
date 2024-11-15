import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { createServer } from "http";
import dotenv from "dotenv";
import { BaseRouter } from "./routes";
import deviceRouter from "./routes/device.router";

dotenv.config();

async function startServer() {
  const app = express();

  // Parse incoming JSON requests
  app.use(express.json());

  // CORS and security headers
  app.use(cors());
  app.use(helmet());

  // Custom morgan token for correlation ID
  morgan.token(
    "correlationId",
    (req: Request) => (req.headers["correlation-id"] as string) || ""
  );

  // Set up morgan logging format
  app.use(
    morgan(
      ":method :url :status :res[content-length] - :response-time ms :correlationId"
    )
  );

  // Mount base routes
  app.use("/v1", [BaseRouter, deviceRouter]);

  // Global Error Handling Middleware
  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    if (!err) return next();
    const statusCodes: { [key: string]: number } = {
      BadRequestError: 400,
      UnauthorizedError: 401,
      ForbiddenError: 403,
      NotFoundError: 404,
      ConflictError: 409,
    };
    const status = statusCodes[err.name] || 500;
    res.status(status).json({ status, message: err.message });
  });

  // 404 handler for undefined routes 
  app.use((req: Request, res: Response) => {
    res.status(404).send("Not Found");
  });

  // Create and start the server
  const server = createServer(app);
  const PORT = process.env.PORT || 3000;

  server.on("error", (err: Error) => {
    console.error(err);
    process.exit(1);
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
