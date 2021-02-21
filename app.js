const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const envelopesRoute = require("./routes/envelopes");
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1/envelopes", envelopesRoute);

app.listen(PORT, () => {
  console.log(`listen in ${PORT}`);
});
