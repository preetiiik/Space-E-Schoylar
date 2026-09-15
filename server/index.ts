import "dotenv/config";
import express from "express";
import cors from "cors";

import { handleDemo } from "./routes/demo";
import contactRouter from "./routes/contact";

export function createServer() {
  const app = express();

  // -----------------------------
  // MIDDLEWARE
  // -----------------------------

  app.use(cors());

  app.use(express.json());

  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  // -----------------------------
  // HEALTH / TEST API
  // -----------------------------

  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";

    res.json({
      message: ping,
    });
  });

  // -----------------------------
  // EXISTING DEMO API
  // -----------------------------

  app.get("/api/demo", handleDemo);

  // -----------------------------
  // CONTACT API
  // -----------------------------

  app.use("/api", contactRouter);

  return app;
}