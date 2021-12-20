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
      const tagID = await tagsService.getByName(value);
      if (tagID === null) {
        return res.send({
          success: false,
          result: {
            message: "Tag not found",
          },
        });
      }
      return res.json(tagID);
    } catch (e) {
      res.status(500).json(e);
    }
  }

 
}
module.exports = new tagsController();
