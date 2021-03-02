const Concert = require('../models/concerts.model');


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
//  Math.floor(Math.random() * max) + 1
}

exports.getAll = async (req, res) => {
  try {
    res.json(await Concert.find());
    console.log(await Concert.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getAllperformer = async (req, res) => {
  try {
    res.json(await Concert.find({performer:{ $regex: '.*' + req.params.id + '.*' } }));
    console.log(await Concert.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getAllgenre = async (req, res) => {
  try {
    res.json(await Concert.find({genre:{ $regex: '.*' + req.params.id + '.*' } }));
    console.log(await Concert.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getAllprice= async (req, res) => {
  try {
    res.json(await Concert.find({price:{ $gt: req.params.idmin, $lt: req.params.idmax} }));

    console.log(await Concert.find({price:{ $gt: 19, $lt: 40} }));
  }

  catch(err) {
    res.status(500).json({ message: err });
  }
};


exports.getAllday = async (req, res) => {
  try {
    res.json(await Concert.find({day:req.params.id }));
    console.log(await Concert.find({day:2}));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

/*

router.route('/concerts/:id').get((req, res) => {
  if ((req.params.id)=='random')   {

  //  res.json(db.concerts.filter(item=> (item.id == getRandomInt(db.concerts.length) )));
   res.json(db.concerts[getRandomInt(db.concerts.length)]);
  } else {
    res.json(db.concerts.filter(item=> (item.id ==req.params.id )));
  }
});
router.route('/concerts').post((req, res) => {
    //db.product.push(JSON.stringify(req.body))
    db.concerts.push(req.body)
      res.json({ message: 'OK' });

  }
)
router.route('/concerts/:id').put((req, res) => {
    db.concerts[req.params.id]=req.body;
    res.json({ message: 'OK' });
});
router.route('/concerts/:id').delete((req, res) => {
  //  delete db.concerts[req.params.id];
  db.concerts.filter(item=> (item.id !=req.params.id ));
      res.json({ message: 'OK' });

});
*/

//module.exports = router;
