// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./server/config/config.json');
const configs = require('./server/config/main');
const logger = require('morgan');

// Get our API routes
const api = require('./server/routes/api');

const app = express();
app.use(cors());
app.use(logger('dev'));
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static('dist'));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.set('port', configs.port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
const port = configs.port;

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));