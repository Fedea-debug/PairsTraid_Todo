const event_tagsService = require("../../service/Calendar/event_tagService");
const eventService = require("../../service/Calendar/eventService");
const toBool = require("../../lib/helper");

class eventController {
  async create(req, res, next) {
    try {
      const { value } = req.params;
      console.log(value);
      const tag_id = await event_tagsService.getByName(value);
      console.log(tag_id);
      const event = await eventService.create(req.body, tag_id, req.uuid);
      console.log(event);
      return res.json(event);
    } catch (e) {
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong in event",
          status: 500,
        },
      });
    }
  }

  async getAll(req, res) {
    try {
      //const status = toBool(req.query.status);
      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;

      //const status = req.params.status;
      //console.log(status);
      //   if (status === undefined) {
      //     console.log("if statement" + status);
      //     return res.status(500).json({
      //       success: false,
      //       result: {
      //         message: "Status undefined",
      //         status: 404,
      //       },
      //     });
      //   }
      const event = await eventService.getAll(limit, offset, req.uuid);
      if (event.count === 0) {
        return res.status(404).json({
          success: false,
          result: {
            message: "No events",
            status: 404,
          },
        });
      }
      return res.json(event);
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

  async update(req, res) {
    try {
      const updatedEvent = await eventService.update(req.body, req.body.id);
      return res.json(updatedEvent);
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
  async delete(req, res) {
    try {
      const id = parseInt(req.query.id);
      const deletedEvent = await eventService.delete(id);
      return res.json(deletedEvent);
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
module.exports = new eventController();
