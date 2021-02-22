// post.routes.js
const express = require('express');
const router = express.Router();

const SeatController = require('../controllers/seats.controller');
router.get('/seats', SeatController.getAll);
router.post('/seats', SeatController.postSeat);
/*router.get('/concerts/random', ConcertController.getRandom);
router.get('/concerts/:id', ConcertController.getId);
router.post('/concerts', ConcertController.postPrd);
router.put('/concerts/:id', ConcertController.putId);
router.delete('/concerts/:id', ConcertController.deleteId);*/

module.exports = router;
