const express = require('express')
const path = require('path');
const cors = require('express-cors');
const socket = require('socket.io');
const mongoose = require('mongoose');
const app = express();


app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});




app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(express.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));
const testimonials = require('./routes/testimonials.router');
const concerts = require('./routes/concerts.router');
const seats = require('./routes/seats.router');

app.use('/api', testimonials);
app.use('/api', concerts);
app.use('/api', seats);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
app.use((req, res) => {
  res.status(404).json({message: 'Not found...'});
})


// connects our backend code with the database
//mongoose.connect('mongodb://localhost:27017/NewWaveDB', { useNewUrlParser: true, useUnifiedTopology: true  });
//mongoose.connect('mongodb+srv://AtlsrtaedfDB:estATef12@cluster0.vam56.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  });
mongoose.connect('mongodb+srv://AtlsrtaedfDB:estATef12@cluster0.vam56.mongodb.net/NewWaveDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});
const io = socket(server, {
  cors: {
    origin: '*',
    }
  });
  io.on('connection', socket => {
  console.log(`New client! Its id – ${socket.id}`);
  });
