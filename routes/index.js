const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', async(req, res) =>{
    res.json("Hello")
});






module.exports = router;