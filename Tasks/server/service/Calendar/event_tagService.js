const ApiError = require("../../error/apiError");
const { event_tags } = require("../../models");

class event_tagsService {
  async create(tag) {
    const createdTag = await event_tags.create(tag);
    console.log(createdTag);
    return createdTag;
  }

  async getAll() {
    const all_tags = await event_tags.findAndCountAll();
    return all_tags;
  }

  async getByName(value) {
    const tagByName = await event_tags.findOne({
      where: { name: `${value}` },
    });
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
module.exports = new event_tagsService();
