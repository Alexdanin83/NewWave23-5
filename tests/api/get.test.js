
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');
const Concert = require('../../models/concerts.model');
chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;


describe('GET /api/concerts', () => {
  it('/ should return all concerts', async () => {

  const res = await request(server).get('/api/concerts');
  expect(res.status).to.be.equal(200);
  expect(res.body).to.be.an('array');
  expect(res.body.length).to.be.equal(3);

});
/*  before(async () => {
    const testDepOne = new Concert({ id: '5d9f1140f10a81216cfd4408', performer: 'performer', genre: 'genre 1', price: 25, day: 1,image: 'image1' });
    await testDepOne.save();

    const testDepTwo = new Concert({ id: '5d9f1140f10a81216cfw4409', performer: 'performer 2', genre: 'genre 2', price: 40, day: 2, image: 'image2' });
    await testDepTwo.save();
    console.log(await Concert.find());
  });*/

  /*it('should return concerts', async () => {
    const res = await request(server).get('/concerts/performer/John Doe');
      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.be.equal(1);
      console.log(res.body);

  });*/

/*  it('/:id should return one department by :id ', async () => {
    const res = await request(server).get('/api/departments/5d9f1140f10a81216cfd4408');
     expect(res.status).to.be.equal(200);
     expect(res.body).to.be.an('object');
     expect(res.body).to.not.be.null;
  });*/


/*  after(async () => {
  await Concert.deleteMany();
});*/

});
