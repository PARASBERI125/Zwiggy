import express from "express";
import { getDish } from "../Controller/dish.controller.js";
const router = express.Router();
router.get("/", getDish);
export default router;
