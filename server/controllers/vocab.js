let firebase = require("firebase");
let fb = require("../config/config.json");

var config = {
    apiKey: fb.apiKey,
    authDomain: fb.authDomain,
    databaseURL: fb.databaseURL,
    projectId: fb.projectId,
    storageBucket: fb.storageBucket,
    messagingSenderId: fb.messagingSenderId
  };

firebase.initializeApp(config);

exports.getNames = (req, res, next) => {
    firebase.database().ref('names/').once('value').then(snapshot => {
    let arrayOfObjects = Object.keys(snapshot.val()).map(key => {
      return snapshot.val()[key];
    });
    res.json(arrayOfObjects);
  }).catch(error => {
    res.json(error);
  });
};