const event_tagsService = require("../../service/Calendar/event_tagService");

class event_tagsController {
  async create(req, res) {
    try {
      const tag = await event_tagsService.create(req.body);
      return res.json(tag);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong",
          status: 500,
        },
      });
    }
  }

  async getAll(req, res) {
    try {
      const tags = await event_tagsService.getAll();
      return res.json(tags);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong",
          status: 500,
        },
      });
    }
  }

  async getByName(req, res) {
    try {
      const { value } = req.params;
      const tagID = await event_tagsService.getByName(value);

      return res.json(tagID);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong",
          status: 500,
        },
      });
    }
  }
}
module.exports = new event_tagsController();
