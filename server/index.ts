import next from "next";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import api from "./api";
import nextI18NextMiddleware from "next-i18next/middleware";
import nextI18next from "../i18n";

dotenv.config();

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const setCustomRequest = () => {
  return (req, _res, next) => {
    req["theme"] = req.cookies["theme"] || "dark";
    next();
  };
};

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use(morgan("dev"));
  server.use(nextI18NextMiddleware(nextI18next));
  server.use(setCustomRequest());
  server.use("/api", api);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
