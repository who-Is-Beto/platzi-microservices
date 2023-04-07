import express from "express";
import { success } from "../../network/response";

const router = express.Router();

router.get("/", (req, res, next) => {
  success(req, res, "Users list", 200);
});

export default router;
