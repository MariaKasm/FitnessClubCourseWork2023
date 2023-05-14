/** @format */

import { Request, Response } from "express";
import { TypeSubscription } from "../models/models";

class TypeSubscriptionCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const type = await TypeSubscription.create({ name });
      res.status(200).json(type);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const alltype = await TypeSubscription.findAll();
      res.status(200).json(alltype);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await TypeSubscription.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new TypeSubscriptionCreate();
