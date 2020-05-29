import express from "express";
import BaseController from "../utils/BaseController";
import { starService } from "../services/StarService";
import { planetService } from "../services/PlanetService";

export class StarController extends BaseController {
  constructor() {
    super("api/stars");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/planets", this.getPlanetsByStarId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await starService.find(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await starService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await starService.create(req.body);
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await starService.edit(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await starService.delete(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getPlanetsByStarId(req, res, next) {
    try {
      let data = await planetService.find({ star: req.params.id });
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
