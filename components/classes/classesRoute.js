const express = require('express');
const router = express.Router();
const classCtrl = require ('./classesController.js');

router.get('/', classCtrl.getClass);

router.post('/add', classCtrl.postAdd);

module.exports = router;