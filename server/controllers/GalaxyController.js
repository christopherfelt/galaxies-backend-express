import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";
import { starService } from "../services/StarService";
import { planetService } from "../services/PlanetService";

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getStarsByGalaxyId)
      .get("/:id/planets", this.getPlanetsByGalaxyId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await galaxyService.find(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await galaxyService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await galaxyService.create(req.body);
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await galaxyService.edit(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await galaxyService.delete(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getStarsByGalaxyId(req, res, next) {
    try {
      let data = await starService.find({ galaxy: req.params.id });
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getPlanetsByGalaxyId(req, res, next) {
    try {
      let data = await starService.find({ galaxy: req.params.id });

      async function getPlanets() {
        let planetData = await data.map((s) => {
          return planetService.find({ star: s.id });
        });
        console.log(planetData);
        res.send(data);
      }
      getPlanets();
    } catch (error) {
      next(error);
    }
  }
}
