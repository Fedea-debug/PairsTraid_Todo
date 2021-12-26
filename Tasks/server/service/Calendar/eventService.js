const { events } = require("../../models");

class eventService {
  async create(event_req, tag_id, uuid) {
    console.log(event_req);
    // console.log(event_req.description);
    const createdEvent = await events.create({
      title: event_req.title,
      start_date: event_req.start_date,
      end_date: event_req.end_date,
      all_day: event_req.all_day,
      event_url: event_req.event_url,
      location: event_req.location,
      description: event_req.description,
      user_id: uuid,
      tag_id: tag_id,
    });
    console.log(createdEvent);
    return createdEvent;
  }

  async getAll(limit_req, offset_req, uuid, status) {
    const all_events = await events.findAndCountAll({
      attributes: [
        `id`,
        `title`,
        `start_date`,
        `end_date`,
        `all_day`,
        `event_url`,
        `location`,
        `description`,
        `user_id`,
        `tag_id`,
      ],
      //   if(status) {
      //     where: {
      //       status: status;
      //     }
      //   },

      limit: limit_req,
      offset: offset_req,
    });

    return all_events;
  }

  async update(eventPut, id) {
    const updatedEvent = await events.update(eventPut, { where: { id: id } });
    return updatedEvent;
  }

  async delete(id) {
    const deletedEvent = await events.destroy({ where: { id: id } });
    return deletedEvent;
  }
}
module.exports = new eventService();
