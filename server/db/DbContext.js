import ValueSchema from "../models/Value";
import Galaxy from "../models/Galaxy";
import mongoose from "mongoose";
import Star from "../models/Star";
import Planet from "../models/Planet";
import Moon from "../models/Moon";
import Species from "../models/Species";

class DbContext {
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema);
    this.Galaxy = mongoose.model("galaxies", Galaxy);
    this.Star = mongoose.model("stars", Star);
    this.Planet = mongoose.model("planets", Planet);
    this.Moon = mongoose.model("moons", Moon);
    this.Species = mongoose.model("species", Species);
  }
}

export const dbContext = new DbContext();
