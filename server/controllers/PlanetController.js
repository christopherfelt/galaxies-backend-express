import express from "express";
import BaseController from "../utils/BaseController";
import { planetService } from "../services/PlanetService";
import { moonService } from "../services/MoonService";

export class PlanetController extends BaseController {
  constructor() {
    super("api/planets");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/moons", this.getMoonsByPlanetId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await planetService.find(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await planetService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await planetService.create(req.body);
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await planetService.edit(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await planetService.delete(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getMoonsByPlanetId(req, res, next) {
    try {
      let data = await moonService.find({ planet: req.params.id });
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
