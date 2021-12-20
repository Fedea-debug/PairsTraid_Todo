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

  async getByName(value) {
    console.log(value);
    const tagByName = await Tags.findOne({ where: { name: `${value}` } });
    const tagID = tagByName.id
    console.log(tagID)
    return tagID;
  }

  // async getById(id) {
  //   console.log(id);
  //   const tagById = await Tags.findOne({ where: { id: `${id}` } });
  //   return tagById;
  // }
}
module.exports = new tagsService();
