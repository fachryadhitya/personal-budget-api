const {
  getAllEnvelopes,
  getOneEnvelope,
  deleteEnvelope,
  createEnvelope,
} = require("../controllers/envelopes");
const express = require("express");
const Router = express.Router();

Router.get("/", getAllEnvelopes);
Router.get("/:id", getOneEnvelope);
Router.delete("/:id", deleteEnvelope);
Router.post("/", createEnvelope);

module.exports = Router;
