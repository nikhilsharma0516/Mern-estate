const express = require('express');
const { getAllUser } = require('../controller/user.controller');
const router = express.Router();

router.get('/test', getAllUser);

module.exports = router;
