import express from "express";

export class Server {
  public readonly app: express.Application;
  public readonly port: number | string;

  private static _instance: Server;
  private server: any = null;

  private constructor(port: number | string) {
    this.port = port;
    this.app = express();
  }

  public static getInstance(port: number | string): Server {
    if (!Server._instance) {
      Server._instance = new Server(port);
    }

    return Server._instance;
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Listen on port: ${this.port}`);
    });
  }

  public stop(): void {
    this.server ? this.server.close() : null;
  }
}
