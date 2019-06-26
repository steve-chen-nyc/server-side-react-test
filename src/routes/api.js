import { Router } from "express";
let router = Router();

router.get("/", (req, res) => {
  res.json({ name: "BOBBY" });
});

export default router;
