// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// Get our API routes
const api = require('./server/routes/api');
const convert = require('./server/routes/convert');
// const admin = require('./server/routes/internal');

const app = express();
app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static('dist'));
// app.use(express.static('../uploads'));
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'admin')));
// app.use(express.static(path.join(__dirname, 'node_modules')));

// Set our api routes
app.use('/api', api);
app.use('/convert', convert);
// app.use('/internal', admin);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
