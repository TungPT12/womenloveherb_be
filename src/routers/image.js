const express = require('express');

const detectTongueController = require("../controllers/images");

const router = express.Router();

router.post('/images', detectTongueController.detectTongue);

module.exports = router;