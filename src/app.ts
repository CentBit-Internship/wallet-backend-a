import express from 'express';
import ussdRoute from './routes/router';


require("dotenv").config();

const app = express()

app.use(express.json())

// Routes
app.use('/', ussdRoute)

const port = process.env.PORT || 3004

app.listen(port, () => console.log(`app running on port ${port}`));