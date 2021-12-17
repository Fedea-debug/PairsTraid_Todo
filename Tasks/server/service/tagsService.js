const { Tags } = require("../models");
class tagsService {
  async create(tag) {
    const createdTag = await Tags.create(tag);
    return createdTag;
  }

  async getAll() {
    const tags = await Tags.findAll();
    return tags;
  }
}
module.exports = new tagsService();
