import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarService {
  async find(query) {
    return await dbContext.Star.find(query).populate("galaxy");
  }

  async findById(id) {
    let data = await dbContext.Star.findById(id).populate("galaxy");
    if (!data) {
      throw new BadRequest("Invalid I");
    }
    return data;
  }

  async create(body) {
    return await dbContext.Star.create(body);
  }

  async edit(id, body) {
    let data = await dbContext.Star.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Star.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return "Successfully deleted";
  }
}

export const starService = new StarService();
