"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typesubscriptionController_1 = __importDefault(require("../controllers/typesubscriptionController"));
var router = (0, express_1.Router)();
router.post("/createtype", typesubscriptionController_1.default.create);
router.get("/getAlltype", typesubscriptionController_1.default.getAll);
router.delete("/deletetype", typesubscriptionController_1.default.delete);
exports.default = router;
