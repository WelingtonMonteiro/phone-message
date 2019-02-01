/**
 * Created by Welington on 28/05/2017.
 */
process.env.ENV = 'test';

const Sms = require('../../modules/sms/sms.model');
const StringService = require('../../services/string.service');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Message sms', () => {

	/**
	 * Test the /POST route
	 */
	describe('/POST Create sms', () => {
		it('it should Create  sms', (done) => {
			let sms = {
				"userID" : "5be031d249edd40014019e2c",
				"message": "teste de mesa",
				"to": "12988121269",
				"from": "12988121269"
			};
			
			chai.request(server)
				.post('/api/message')
				.send(sms)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.data.should.be.a('object');
					res.body.data.should.have.property('_id');
					done();
				});
		});
	});

	/**
	 * Test the /GET route null
	 */
	describe('verify is reponse is null', () => {
		it('it should GET all the smss', (done) => {
			chai.request(server)
				.get('/api/messages')
				.end((err, res)  => {
					res.should.have.status(200);
					res.body.should.have.property('data').eq(null);

					done();
				});
		});
	});

	/**
	 * Test the /GET route
	 */
	describe('/GET all smss', () => {
		it('it should GET all the smss', (done) => {
			chai.request(server)
				.get('/api/messages')
				.end((err, res)  => {
					res.should.have.status(200);
					res.body.data.should.be.a('array');
					res.body.data.length.should.be.eql(0);
					done();
				});
		});
	});


});
