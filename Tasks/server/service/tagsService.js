const ApiError = require("../error/apiError");
const { tags } = require("../models");

class tagsService {
  async create(tag) {
    const createdTag = await tags.create(tag);
    return createdTag;
  }

  async getAll() {
    const all_tags = await tags.findAll();
    return all_tags;
  }

  async getByName(value) {
    const tagByName = await tags.findOne({ where: { name: `${value}` } });
    if (tagByName === null) {
      return ApiError.badRequest({
        success: false,
        result: {
          message: "Tag not found",
          status: 404,
        },
      });
    }
    const tagID = tagByName.id;
    return tagID;
  }
}
module.exports = new tagsService();
