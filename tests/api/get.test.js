const chai = require('chai');
const mongoose = require('mongoose');
const chaiHttp = require('chai-http');
const serverModule = require('../../server');
const Concert = require('../../models/concerts.model');
const Seat = require('../../models/seats.model');

const { server } = serverModule;
const { dbURI } = serverModule;

chai.use(chaiHttp);

const { expect } = chai;
const { request } = chai;

describe('GET /api/concerts', async () => {
  before(async () => { //eslint-disable-line
    mongoose.connect('mongodb://localhost:27017/NewWaveDB',  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.once('open', () => {
      
      console.log('Connected to the database');
    });
    db.on('error', err => {
      console.log(`Error ${err}`);
    });
  });


  it('/ should return all concerts', async () => {
    const res = await request(server).get('/api/concerts');
    expect(res.status).to.be.equal(200);
  
  });

});