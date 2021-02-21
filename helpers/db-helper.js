module.exports = {
  createId(data) {
    const latestRecord = data[data.length - 1];
    const newId = latestRecord.id + 1;
    if (newId === NaN || newId === undefined || newId < 0) {
      return "wrong Id";
    }

    return newId;
  },

  findById(data, id) {
    const record = data.find((item) => item.id === parseInt(id));

    // if (!record) {
    //   return "ID NOT FOUND";
    // }
    return record;
  },

  deleteById(data, id) {
    const indexData = data.findIndex((item) => {
      return item.id === parseInt(id);
    });

    data.splice(indexData, 1);

    return data;
  },
};
