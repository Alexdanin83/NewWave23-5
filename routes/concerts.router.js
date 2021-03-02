// post.routes.js
const express = require('express');
const router = express.Router();

const ConcertController = require('../controllers/concerts.controller');
router.get('/concerts', ConcertController.getAll);
router.get('/concerts/performer/:id', ConcertController.getAllperformer);
router.get('/concerts/genre/:id', ConcertController.getAllgenre);
router.get('/concerts/price/:idmin/:idmax', ConcertController.getAllprice);
router.get('/concerts/day/:id', ConcertController.getAllday);
/*router.get('/concerts/random', ConcertController.getRandom);
router.get('/concerts/:id', ConcertController.getId);
router.post('/concerts', ConcertController.postPrd);
router.put('/concerts/:id', ConcertController.putId);
router.delete('/concerts/:id', ConcertController.deleteId);*/

module.exports = router;
