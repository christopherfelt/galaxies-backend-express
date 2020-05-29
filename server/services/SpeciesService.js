import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
  async find(query) {
    return await dbContext.Species.find(query).populate("planets");
  }

  async findById(id) {
    let data = await await dbContext.Species.findById(id);
    if (!data) {
      throw new BadRequest("Invalid I");
    }
    return data;
  }

  async create(body) {
    return await dbContext.Species.create(body);
  }

  async edit(id, body) {
    let data = await dbContext.Species.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Species.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return "Successfully deleted";
  }
}

export const speciesService = new SpeciesService();
