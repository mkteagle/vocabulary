
module.exports = {
  // Secret key for JWT signing and encryption
  'secret': 'secretstringboogies',
  // Database connection information
  'database': 'mongodb://10.0.1.44:27017/doingutahdaily',
  // Setting port for server
  'port': process.env.PORT || 6543
};
