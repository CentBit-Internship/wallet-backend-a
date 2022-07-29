import mongoose from "mongoose";

const ussdSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const UssdApp = mongoose.model('UssdApp', ussdSchema)

export default UssdApp;