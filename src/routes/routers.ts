/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";
import TypeSubscriptionCreate from "../controllers/typesubscriptionController";
import SubscriptionCreate from "../controllers/subscriptionController";
import CoachesCreate from "../controllers/coachesController";
import CoachesReviewsCreate from "../controllers/coachesReviewsControllers";
import auth from "../middleware/authMiddleware";
import role from "../middleware/checkRoleMiddleware";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.put("/userupdate", auth, UserController.update);
router.get("/check", auth, UserController.check);

router.post("/createSubscription", role, SubscriptionCreate.create);
router.get("/getAlltypeSubscription", SubscriptionCreate.getAll);
router.delete("/deleteSubscription", SubscriptionCreate.delete);

router.post("/createtype", role, TypeSubscriptionCreate.create);
router.get("/getAlltype", TypeSubscriptionCreate.getAll);
router.delete("/deletetype", TypeSubscriptionCreate.delete);

router.post("/createCoaches", CoachesCreate.create);
router.get("/getAllCoaches", CoachesCreate.getAll);
router.get("/geOneCoaches", CoachesCreate.getOne);
router.delete("/deleteCoaches", CoachesCreate.delete);

router.post("/createReviews", CoachesReviewsCreate.create);
router.get("/getAllReviews", CoachesReviewsCreate.getAll);
router.get("/geOneReviews", CoachesReviewsCreate.getOne);
router.delete("/deleteReviews", CoachesReviewsCreate.delete);

export default router;
