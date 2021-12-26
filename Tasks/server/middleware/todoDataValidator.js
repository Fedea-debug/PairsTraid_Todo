const ApiError = require("../error/apiError");
const tagsService = require("../service/Todo/tagsService");

const validation = async (req, res, next) => {
  try {
    const data_to_validate = req.body;
    const tag = req.params;
    const current_time = new Date();

    if (data_to_validate.title.length > 30) {
      return res.status(404).json({
        success: false,
        result: {
          message: "Title is too long",
          status: 404,
        },
      });
    }

    if (data_to_validate.description.length > 30) {
      return res.status(404).json({
        success: false,
        result: {
          message: "Description is too long",
          status: 404,
        },
      });
    }

    if (data_to_validate.deadLine < current_time.toISOString()) {
      console.log("Time");
      return res.status(404).json({
        success: false,
        result: {
          message: "Date or time are wrong",
          status: 404,
        },
      });
    }
    console.log(tag);
    if (tag.value !== undefined) {
      console.log(tag.value);
      const tag_id = await tagsService.getByName(tag.value);

      if (tag_id instanceof ApiError) {
        return res.status(404).json(tag_id);
      }
    }

    return next();
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
};
module.exports = validation;
