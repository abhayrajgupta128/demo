"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRouter = exports.BaseRouter = void 0;
var base_router_1 = require("./base.router");
Object.defineProperty(exports, "BaseRouter", { enumerable: true, get: function () { return __importDefault(base_router_1).default; } });
var device_router_1 = require("./device.router");
Object.defineProperty(exports, "DeviceRouter", { enumerable: true, get: function () { return __importDefault(device_router_1).default; } });
