import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
  async find(query) {
    return await dbContext.Galaxy.find(query);
  }

  async findById(id) {
    let data = await dbContext.Galaxy.findById(id);
    if (!data) {
      throw new BadRequest("Invalid I");
    }
    return data;
  }

  async create(body) {
    return await dbContext.Galaxy.create(body);
  }

  async edit(id, body) {
    let data = await dbContext.Galaxy.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Galaxy.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return "Successfully deleted";
  }
}

export const galaxyService = new GalaxyService();
