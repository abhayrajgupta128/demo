"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const coreRouter = (0, express_1.Router)();
coreRouter.get('/demo/first', controllers_1.BaseController.index);
exports.default = coreRouter;
