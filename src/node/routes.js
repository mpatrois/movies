const express = require('express')
var router = express.Router();
var moviesController = require('./controllers/moviesController');

var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

router.get('/api/movies', moviesController.index);
router.get('/api/movies/:id', moviesController.show);
router.post('/api/movies/:id', upload.single('poster') , moviesController.update)
router.post('/api/movies', upload.single('poster'), moviesController.store)
router.delete('/api/movies/:id', moviesController.deleteMovie);

module.exports = router;