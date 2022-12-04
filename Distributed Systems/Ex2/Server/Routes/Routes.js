const express = require('express');
const mediaRoutes = require('./Media');

var router = express.Router();


router.get('/medias', mediaRoutes.getMovies);
router.get('/medias/:id', mediaRoutes.getMovie);
router.post('/medias', mediaRoutes.createMovie);
router.put('/medias/:id/actors', mediaRoutes.addActorToMovie);
router.put('/medias/:id/actors/:actorName', mediaRoutes.deleteActorFromMovie);
router.put('/medias/:id', mediaRoutes.updateMovie);
router.delete('/medias/:id', mediaRoutes.deleteMovie);

module.exports = router;