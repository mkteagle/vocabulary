let firebase = require("firebase");
let fb = require("../config/config.json");
var admin = require("firebase-admin");
var serviceAccount = require("../config/secret.json");

var config = {
  apiKey: fb.apiKey,
  authDomain: fb.authDomain,
  databaseURL: fb.databaseURL,
  projectId: fb.projectId,
  storageBucket: fb.storageBucket,
  messagingSenderId: fb.messagingSenderId
};

firebase.initializeApp(config);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.databaseURL
});

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
exports.login = (req, res, next) => {
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(response => {
    res.json(response);
  }).catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
exports.postNames = (req, res, next) => {
  firebase.database().ref('names/')
}