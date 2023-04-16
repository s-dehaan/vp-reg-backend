import express, { Application, Request, Response } from "express";

const app: Application = express();

app.disable("x-powered-by");

app.get("/", (request: Request, response: Response) => {
  response.json({ status: "online" });
});

export default app;
