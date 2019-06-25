const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ "name": "BOBBY" });
});

module.exports = router
