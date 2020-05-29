import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetService {
  async find(query) {
    return await dbContext.Planet.find(query).populate("star", "name");
  }

  async findById(id) {
    let data = await (await dbContext.Planet.findById(id)).populate(
      "star",
      "name"
    );
    if (!data) {
      throw new BadRequest("Invalid I");
    }
    return data;
  }

  async create(body) {
    return await dbContext.Planet.create(body);
  }

  async edit(id, body) {
    let data = await dbContext.Planet.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Planet.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return "Successfully deleted";
  }
}

export const planetService = new PlanetService();
