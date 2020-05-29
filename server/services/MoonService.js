import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonService {
  async find(query) {
    return await dbContext.Moon.find(query).populate("planet");
  }

  async findById(id) {
    let data = await (await dbContext.Moon.findById(id)).populated("planet");
    if (!data) {
      throw new BadRequest("Invalid I");
    }
    return data;
  }

  async create(body) {
    return await dbContext.Moon.create(body);
  }

  async edit(id, body) {
    let data = await dbContext.Moon.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Moon.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
    return "Successfully deleted";
  }
}

export const moonService = new MoonService();
