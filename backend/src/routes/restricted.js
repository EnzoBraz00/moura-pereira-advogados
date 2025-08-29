import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/area-restrita", authMiddleware, (req, res) => {
  res.json({ message: `Bem-vindo, ${req.user.email}!` });
});

export default router;