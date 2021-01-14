import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reciperMongoModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  voteAverage: {
    type: Number,
    required: true,
  },
  voteCount: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [String],
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  ownID: {
    type: String,
    required: true,
  },
});

export default mongoose.model("recipe", reciperMongoModel);
