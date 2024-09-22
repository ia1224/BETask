const express = require("express");
const {
  processRequest,
  getOperationCode,
} = require("../controllers/apiController");

const router = express.Router();

// POST request handler
router.post("/", processRequest);

// GET request handler
router.get("/", getOperationCode);

module.exports = router;
