import express from "express";
import { addCar } from "../controllers/admine.js";
const router = express.Router();

router.post("/add", addCar);

export default router;
