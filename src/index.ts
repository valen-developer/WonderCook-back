import { json, urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";

import { Server } from "./apps/server";
import { router } from "./apps/routes/index.routing";
import { enviroment } from "./config/enviroment";

export const SERVER = Server.getInstance(enviroment.server.port);

SERVER.app.use(urlencoded({ extended: false }));
SERVER.app.use(json());

SERVER.app.use(cors());

SERVER.app.use(router);

mongoose.connect(
  enviroment.database.urlDev,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      throw new Error("unable connect with database");
    } else {
      console.log("DB online");
    }
  }
);

SERVER.start();
