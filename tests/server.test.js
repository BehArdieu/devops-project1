const request = require('supertest');
const express = require('express');
const app = require('../server'); // On importe le fichier server.js

// Définir l'application express dans le fichier server.js
// exportons l'application pour pouvoir la tester.
// Dans server.js :
// module.exports = app;

describe('GET /', () => {
  it('should return Hello, DevOps World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, DevOps World!');
  });
});
