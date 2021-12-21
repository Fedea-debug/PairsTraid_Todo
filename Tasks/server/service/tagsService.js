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
    console.log(value);
    const tagByName = await tags.findOne({ where: { name: `${value}` } });
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
