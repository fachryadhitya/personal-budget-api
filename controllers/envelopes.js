const envelopes = require("../config/db");
const { findById, deleteById, createId } = require("../helpers/db-helper");

exports.getAllEnvelopes = async (req, res, next) => {
  try {
    const result = await envelopes;
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createEnvelope = async (req, res, next) => {
  try {
    const { title, budget } = req.body;
    const data = await envelopes;
    const newId = createId(data);

    const newEnvelope = {
      id: newId,
      title,
      budget,
    };

    if (!Number(budget)) {
      res.status(400).send({ message: "budget must be a number" });
    }

    data.push(newEnvelope);

    res.status(200).send(newEnvelope);
  } catch (error) {
    res.status(400).send({ message: "something wrong with us" });
  }
};

exports.getOneEnvelope = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await envelopes;
    const oneData = findById(data, id);

    if (!oneData) {
      return res.status(404).send({
        message: "No Id Found",
      });
    }

    res.status(200).send(oneData);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteEnvelope = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await envelopes;
    const deletedData = deleteById(data, id);

    if (!deletedData) {
      return res.status(404).send({
        message: "No Id Found",
      });
    }

    res.status(200).send(deletedData);
  } catch (error) {
    res.status(400).send(error);
  }
};
