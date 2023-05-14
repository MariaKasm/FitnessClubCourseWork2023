/** @format */
/** @format */

import { Request, Response } from "express";
import { CoachesReviews } from "../models/models";

class CoachesReviewsCreate {
  async create(req: Request, res: Response) {
    try {
      const { review, userId, coachesId } = req.body;
      const coachesreview = await CoachesReviews.create({
        review,
        userId,
        coachesId,
      });
      res.status(200).json(coachesreview);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allreview = await CoachesReviews.findAll();
      res.status(200).json(allreview);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const onereview = await CoachesReviews.findOne({
        where: { coachesId: id },
      });
      res.status(200).json(onereview);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await CoachesReviews.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new CoachesReviewsCreate();
