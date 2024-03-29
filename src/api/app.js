const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { playGame } = require('./ApiGame');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/api/v1/health', (_, response) => response.sendStatus(200));

app.get('/api/v1/play', async (_, response) =>
  response.status(200).json(playGame()),
);

module.exports = app;
