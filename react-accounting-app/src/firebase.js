import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCPnXwRceh6HtOu-qiN4VSPniePl0nWgVw",
  authDomain: "react-accounting-app.firebaseapp.com",
  databaseURL: "https://react-accounting-app.firebaseio.com",
  projectId: "react-accounting-app",
  storageBucket: "react-accounting-app.appspot.com",
  messagingSenderId: "237886543155",
  appId: "1:237886543155:web:807ff5251bf6d6bc275a46"
};

// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();