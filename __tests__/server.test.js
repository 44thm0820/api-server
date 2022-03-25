'use strict';

const supertest = require('supertest');
const app = require('./server/app.js');
const request = supertest(app);

describe('Testing our REST API', () => {
  test('Should delete a funko', () => {

  })
})