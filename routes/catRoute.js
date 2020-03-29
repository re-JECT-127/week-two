'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/hack', (req, res) => {
  res.send(req.body.search);
});

router.post('/', upload.single('cat'), (req, res) => {
  console.log('tiedosto: ', req.file);
  catController.cat_post(req, res);
  //res.send('With this endpoint you can add cats');
});

router.put('/', catController.cat_put);

router.delete('/:id', catController.cat_delete);

module.exports = router;
