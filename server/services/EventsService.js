import mongoose from "mongoose";
import Event from "../models/Event";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Event", Event);

class EventService {
  async getAll(userId) {
    let data = await _repository.find({ authorId: userId })
    return data;
  }

  // async getEventByUserId(userId, uid) {
  //   let data = await _repository.findOne({ userId, authorId: uid })
  //   return data
  // }

  async create(body) {
    let data = await _repository.create(body);
    return data;
  }

  async getById(id, uid) {
    let data = await _repository.findOne({ _id: id, authorId: uid });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async edit(id, update, userId) {
    let data = await _repository.findOneAndUpdate(
      { _id: id, authorId: userId },
      update,
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this event", 400);
    }
    return data;
  }
  async delete(id, uid) {
    let data = await _repository.findOneAndDelete({ _id: id, authorId: uid })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this event", 400);
    }
  }
}

const _eventService = new EventService();
export default _eventService;
