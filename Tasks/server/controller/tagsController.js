const tagsService = require("../service/tagsService");

class tagsController {
  async create(req, res) {
    try {
      const tag = await tagsService.create(req.body);
      return res.json(tag);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const tags = await tagsService.getAll();
      return res.json(tags);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
  async getByName(req, res) {
    try {
      const { value } = req.params;
      console.log(value);
      const tagByName = await tagsService.getByName(value);
      if (tagByName === null) {
        return res.send({
          success: false,
          result: {
            message: "Tag not found",
          },
        });
      }
      return res.json(tagByName);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    const tagById = await tagsService.getById(id);
    if (tagById === null) {
      return res.send({
        success: false,
        result: {
          message: "ID not found",
        },
      });
    }
  }
}
module.exports = new tagsController();
