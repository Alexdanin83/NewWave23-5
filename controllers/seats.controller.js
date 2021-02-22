const Seat = require('../models/seats.model');


// get all posts
exports.getAll = async (req, res) => {
  try {
    //console.log(req.body);
    const {day} = req.body;
    res.json(await Seat.find());
    //console.log(await Seat.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};



exports.postSeat = async (req, res) => {
  try {
    const { day, seat, client, email} = req.body;
    const newSeat = new Seat(
      { day: day,
        seat: seat,
        client: client,
        email: email }
    );
    await newSeat.save();
    req.io.emit('seatsUpdated', await Seat.find());
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
};
/*
router.route('/seats').post((req, res) => {
//sprawdzamy czy w tablicy mamy już zajęte

  if (!( db.seats.some(number => (number.seat === req.body.seat && number.day === req.body.day)))) {
    console.log(req.body.seat);
    db.seats.push({
    id: db.seats.length+1,
    day: req.body.day,
    seat: req.body.seat,
    client: req.body.client,
    email: req.body.email }
    );
    //db.seats.push(req.body)
    res.json({ message: 'OK' });
    //  socket.emit('updateData', tasks);
    console.log(db.seats);
     req.io.emit('seatsUpdated', db.seats);
  }
else
  res.json({ message: 'The slot is already taken...' });

  }
)*/

/*router.route('/seats/:id').get((req, res) => {
  if ((req.params.id)=='random')   {

  //  res.json(db.seats.filter(item=> (item.id == getRandomInt(db.seats.length) )));
   res.json(db.seats[getRandomInt(db.seats.length)]);
  } else {
    res.json(db.seats.filter(item=> (item.id ==req.params.id )));
  }
});
router.route('/seats').post((req, res) => {
//sprawdzamy czy w tablicy mamy już zajęte

  if (!( db.seats.some(number => (number.seat === req.body.seat && number.day === req.body.day)))) {
    console.log(req.body.seat);
    db.seats.push({
    id: db.seats.length+1,
    day: req.body.day,
    seat: req.body.seat,
    client: req.body.client,
    email: req.body.email }
    );
    //db.seats.push(req.body)
    res.json({ message: 'OK' });
    //  socket.emit('updateData', tasks);
    console.log(db.seats);
     req.io.emit('seatsUpdated', db.seats);
  }
else
  res.json({ message: 'The slot is already taken...' });

  }
)
router.route('/seats/:id').put((req, res) => {
    db.seats[req.params.id]=req.body;
    res.json({ message: 'OK' });
});
router.route('/seats/:id').delete((req, res) => {
  //  delete db.seats[req.params.id];
  db.seats.filter(item=> (item.id !=req.params.id ));
      res.json({ message: 'OK' });

});

*/
