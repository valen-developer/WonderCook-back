import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserMongoModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  alias: {
    type: String,
    required: true,
    unique: true,
  },
  createAt: {
    type: String,
    required: true,
  },
  updateAt: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", UserMongoModel);
