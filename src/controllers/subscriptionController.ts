/** @format */

import { Request, Response } from "express";
import { Subscription } from "../models/models";

class SubscriptionCreate {
  async create(req: Request, res: Response) {
    try {
      const { typesubscriptionId, name, description, price } = req.body;
      const create = await Subscription.create({
        typesubscriptionId,
        name,
        description,
        price,
      });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allmodels = await Subscription.findAll();
      res.status(200).json(allmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Subscription.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new SubscriptionCreate();
