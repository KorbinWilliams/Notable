import mongoose from "mongoose"
import Calendar from "../models/Calendar"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Calendar', Calendar)

class CalendarService {
  async getAll() {
    return await _repository.find()
  }

  // async getById(id, userId) {
  //   let data = await _repository.findOne({ _id: id, authorId: userId })
  //   if (!data) {
  //     throw new ApiError("Invalid ID or you do not own this Calendar", 400)
  //   }
  //   return data
  // }

  // async create(rawData) {
  //   let data = await _repository.create(rawData)
  //   return data
  // }

  // async edit(id, userId, upcalendar) {
  //   let data = await _repository.findOneAndUpcalendar({ _id: id, authorId: userId }, upcalendar, { new: true })
  //   if (!data) {
  //     throw new ApiError("Invalid ID or you do not own this Calendar", 400);
  //   }
  //   return data;
  // }

  // async delete(id, userId) {
  //   let data = await _repository.findOneAndRemove({ _id: id, authorId: userId });
  //   if (!data) {
  //     throw new ApiError("Invalid ID or you do not own this calendar", 400);
  //   }
  // }
}


const _calendarService = new CalendarService()
export default _calendarService