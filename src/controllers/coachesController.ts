/** @format */

import { Request, Response } from "express";
import { Coaches } from "../models/models";

class CoachesCreate {
  async create(req: Request, res: Response) {
    try {
      const { fullname, description, experience } = req.body;
      const coachesCreate = await Coaches.create({
        fullname,
        description,
        experience,
      });
      res.status(200).json(coachesCreate);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allcoaches = await Coaches.findAll();
      res.status(200).json(allcoaches);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const onecoaches = await Coaches.findOne({ where: { id: id } });
      res.status(200).json(onecoaches);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Coaches.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new CoachesCreate();
