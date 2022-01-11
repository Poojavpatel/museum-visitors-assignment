const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = require('chai');
const app = require('../../index');

chai.use(chaiHttp);
describe('/GET getVistitorsSummary', () => {
  it('it should get attendance data', (done) => {
    chai.request(app)
      .get('/api/visitors?date=1404198000000')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('attendance');
        expect(res.body).to.have.property('attendance').to.have.property('total');
        expect(res.body).to.have.property('attendance').to.have.property('month');
        expect(res.body).to.have.property('attendance').to.have.property('year');
        expect(res.body).to.have.property('attendance').to.have.property('higest');
        expect(res.body).to.have.property('attendance').to.have.property('lowest');
        done();
      });
  });
});