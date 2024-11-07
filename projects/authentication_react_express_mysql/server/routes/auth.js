import express from "express";
import { register, login, verifyuser, jwtRes, logout } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login)
router.get("/", verifyuser, jwtRes);
router.get('/logout', logout)
// router.get('/', (req, res)=>{
//   req.cookies
// })
export default router;
