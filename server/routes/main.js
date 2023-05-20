const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('', async (req, res) => {
    const locals = {
        title: "RossBlog",
        description: "Created with NodeJS, MongoDB and Express"
    }
    try {
        const data = await Post.find();
        res.render('index', { locals, data });
    } catch (error) {
        console.log(error);
    }
    
});

// function insertPostData () {
//         Post.insertMany([
//             {title: "using Post.insertMany",
//         body: "Returning to MongoDB after some time"}
//         ])
// }
// insertPostData();




router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;