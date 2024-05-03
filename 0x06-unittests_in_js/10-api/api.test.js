const { expect } = require('chai');
const request = require('request');

describe('Login endpoint', () => {
  it('should return correct message when user logs in', (done) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: 'Betty' })
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return correct object with payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});
