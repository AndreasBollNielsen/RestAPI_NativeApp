const { json} = require('express');
let query = require('querystring');
const express = require('express');
const router = express.Router();

 images = [];
 
// send image to API
router.post('/addImage', async (req, res) => {
  
  
  let data = req.body;
  let image = data['path'];
  console.log(data['path']);

  images.push({"imagePath": image});
  res.sendStatus(200);
})

//get images from API
router.get('/getImages', async (req, res) => {

    res.json(images);
  
  })

  module.exports = router;