import express from "express";
import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService";
import { moonService } from "../services/MoonService";

export class SpeciesController extends BaseController {
  constructor() {
    super("api/species");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await speciesService.find(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await speciesService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await speciesService.create(req.body);
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await speciesService.edit(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await speciesService.delete(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
