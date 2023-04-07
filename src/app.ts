import express from "express";
import envs from "../envs/envs";
import users from "./api/users/network";

const app = express();

app.use("/api/users", users);

app.listen(envs.port, (): void => {
  console.log("Listening on port 3000");
});
