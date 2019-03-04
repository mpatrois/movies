const express = require('express')
var router = express.Router();
var moviesController = require('./controllers/moviesController');

router.get('/api/movies', moviesController.index);
router.get('/api/movies/:id', moviesController.show);
router.post('/api/movies/:id', moviesController.update)
router.post('/api/movies', moviesController.store)
router.delete('/api/movies/:id', moviesController.deleteMovie);

module.exports = router;