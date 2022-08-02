import express from "express";
import logger from "morgan";
import ussdRoute from "./routes/router";
import connectDB from "./db_config/db";
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentation from "./utils/docs";

require("dotenv").config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use("/docs", swaggerDoc.serve);

app.use("/docs", swaggerDoc.setup(swaggerDocumentation));

// Routes
app.use("/", ussdRoute);

const port = process.env.PORT || 3004;

// DB Connection
const db_url = `mongodb+srv://stevechude:houseofgrace%401@rest-api.kpvocbv.mongodb.net/?retryWrites=true&w=majority`;
connectDB(db_url);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
