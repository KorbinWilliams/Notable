import _stickyNoteService from '../services/StickyNotesService.js'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'


//PUBLIC
export default class StickyNoteController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get("", this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let data = await _stickyNoteService.getAll(req.session.uid)
      return data
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _stickyNoteService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async getById(req, res, next) {
    try {
      let data = await _stickyNoteService.getById(req.body.id)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _stickyNoteService.edit(req.params.id, req.body, req.session.uid)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _stickyNoteService.delete(req.params.id, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}


