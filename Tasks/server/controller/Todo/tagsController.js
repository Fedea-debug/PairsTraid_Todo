const tagsService = require("../../service/Todo/tagsService");
const ApiError = require("../../error/apiError");

class tagsController {
  async create(req, res) {
    try {
      const tag = await tagsService.create(req.body);
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
      const tags = await tagsService.getAll();
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
      const tagID = await tagsService.getByName(value);

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
module.exports = new tagsController();
