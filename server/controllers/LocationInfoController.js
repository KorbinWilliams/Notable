import _LocationInfoService from "../services/LocationInfoService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";

//PUBLIC
export default class LocationInfoController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getAll)
      // .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getAll(req, res, next) {
    try {
      let data = await _LocationInfoService.getAll(req.session.uid);
      console.log(data);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // async getById(req, res, next) {
  //   try {
  //     let data = await _LocationInfoService.getById(req.params.id, req.session.uid);
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _LocationInfoService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _LocationInfoService.edit(
        req.params.id,
        req.session.uid,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await _LocationInfoService.delete(req.params.id, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
