import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import corsOptions from "./config/allowedOrigins.js";

import postRouters from "./routes/posts.js";

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRouters);
const CONNECTION_URL =
  "mongodb+srv://lollytech:lolly12345@cluster0.f6ropnw.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3500;
mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
