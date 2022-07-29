import express from 'express';
import ussdRoute from './routes/router';
import connectDB from './db_config/db';


require("dotenv").config();

const app = express()

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// Routes
app.use('/', ussdRoute)

const port = process.env.PORT || 3004

// DB Connection
const db_url = `mongodb+srv://stevechude:houseofgrace%401@rest-api.kpvocbv.mongodb.net/?retryWrites=true&w=majority`;
connectDB(db_url);

app.listen(port, () => console.log(`app running on port ${port}`));