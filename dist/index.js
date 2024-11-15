"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const device_router_1 = __importDefault(require("./routes/device.router"));
dotenv_1.default.config();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        // Parse incoming JSON requests
        app.use(express_1.default.json());
        // CORS and security headers
        app.use((0, cors_1.default)());
        app.use((0, helmet_1.default)());
        // Custom morgan token for correlation ID
        morgan_1.default.token("correlationId", (req) => req.headers["correlation-id"] || "");
        // Set up morgan logging format
        app.use((0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms :correlationId"));
        // Mount base routes
        app.use("/v1", [routes_1.BaseRouter, device_router_1.default]);
        // Global Error Handling Middleware
        app.use((err, _req, res, next) => {
            if (!err)
                return next();
            const statusCodes = {
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
        app.use((req, res) => {
            res.status(404).send("Not Found");
        });
        // Create and start the server
        const server = (0, http_1.createServer)(app);
        const PORT = process.env.PORT || 3000;
        server.on("error", (err) => {
            console.error(err);
            process.exit(1);
        });
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
}
startServer();
