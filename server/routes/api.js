const VocabController = require('../controllers/vocab');

const express = require('express');
const router = express.Router();

/* Start of Routes */
router.get('/', (req, res) => {
  res.send('api works :)');
});
/* User Admin */
router.get('/names', VocabController.getNames);

module.exports = router;