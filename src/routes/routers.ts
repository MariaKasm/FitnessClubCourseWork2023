/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";
import TypeSubscriptionCreate from "../controllers/typesubscriptionController";
import SubscriptionCreate from "../controllers/subscriptionController";
import auth from "../middleware/authMiddleware";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/userupdate", auth, UserController.update);
router.get("/check", auth, UserController.check);

router.post("/createSubscription", SubscriptionCreate.create);
router.get("/getAlltypeSubscription", SubscriptionCreate.getAll);
router.delete("/deleteSubscription", SubscriptionCreate.delete);

router.post("/createtype", TypeSubscriptionCreate.create);
router.get("/getAlltype", TypeSubscriptionCreate.getAll);
router.delete("/deletetype", TypeSubscriptionCreate.delete);

export default router;
