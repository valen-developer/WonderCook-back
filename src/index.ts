import { json, urlencoded } from "express";
import cors from "cors";

import { Server } from "./apps/server";
import { enviroment } from "./config/enviroment";

export const SERVER = Server.getInstance(enviroment.server.port);

SERVER.app.use(urlencoded({ extended: false }));
SERVER.app.use(json());

SERVER.app.use(cors());

SERVER.start();
