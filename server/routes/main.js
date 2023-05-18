const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "RossBlog",
        description: "Created with NodeJS, MongoDB and Express"
    }
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;