"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("../controllers/userController"));
var typesubscriptionController_1 = __importDefault(require("../controllers/typesubscriptionController"));
var subscriptionController_1 = __importDefault(require("../controllers/subscriptionController"));
var authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
var router = (0, express_1.Router)();
router.post("/registration", userController_1.default.registration);
router.post("/login", userController_1.default.login);
router.get("/userupdate", authMiddleware_1.default, userController_1.default.update);
router.get("/check", authMiddleware_1.default, userController_1.default.check);
router.post("/createSubscription", subscriptionController_1.default.create);
router.get("/getAlltypeSubscription", subscriptionController_1.default.getAll);
router.delete("/deleteSubscription", subscriptionController_1.default.delete);
router.post("/createtype", typesubscriptionController_1.default.create);
router.get("/getAlltype", typesubscriptionController_1.default.getAll);
router.delete("/deletetype", typesubscriptionController_1.default.delete);
exports.default = router;
