import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";
import routes from "./routes/index";
import MessageResponse from "./interfaces/MessageResponse";
const { connect } = require("./db.ts");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
