import express from "express";
import logger from "morgan";
import cors from 'cors';
import ussdRoute from "./routes/router";
import connectDB from "./db_config/db";
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentation from "./utils/docs";

require("dotenv").config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({extended: true}));

app.use("/docs", swaggerDoc.serve);

app.use("/docs", swaggerDoc.setup(swaggerDocumentation));

// Routes
app.use("/", ussdRoute);

const port = process.env.PORT || 3004;

// DB Connection
const db_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.kpvocbv.mongodb.net/?retryWrites=true&w=majority`;
connectDB(db_url);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
